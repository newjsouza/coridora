const fs = require('fs');
const path = require('path');

const targets = require('../config/update-targets.json');

const fetchFn = typeof fetch === 'function'
  ? fetch.bind(globalThis)
  : (...args) => import('node-fetch').then(({ default: fetchModule }) => fetchModule(...args));

const defaultTimeout = Number(process.env.DATA_UPDATE_TIMEOUT_MS || 45000);

const buildUrl = (baseUrl, endpoint = '') => {
  if (!baseUrl) {
    throw new Error('LEAGUES_API_BASE_URL não configurada.');
  }

  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
  const url = new URL(normalizedEndpoint, normalizedBase);
  return url;
};

const appendQueryParams = (url, query = {}) => {
  Object.entries(query).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    url.searchParams.append(key, value);
  });
};

const buildRequestOptions = (target, apiKey) => {
  const method = (target.method || 'GET').toUpperCase();
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
    ...target.headers,
  };

  const options = { method, headers };

  if (method !== 'GET' && target.body !== undefined) {
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    options.body = typeof target.body === 'string' ? target.body : JSON.stringify(target.body);
  }

  return options;
};

const ensureDirectory = (filePath) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
};

const pickPayload = (payload, target) => {
  if (!target.pick) {
    return payload;
  }

  const value = payload[target.pick];
  if (value === undefined) {
    throw new Error(`Chave '${target.pick}' não encontrada no payload recebido.`);
  }
  return value;
};

const updateSingleTarget = async (target, { apiKey, baseUrl, timeout = defaultTimeout } = {}) => {
  if (!apiKey) {
    throw new Error('LEAGUES_API_KEY não configurada.');
  }

  const requestUrl = buildUrl(baseUrl, target.endpoint || '');
  if (target.query) {
    appendQueryParams(requestUrl, target.query);
  }

  const controller = new AbortController();
  const abortTimeout = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetchFn(requestUrl.toString(), {
      ...buildRequestOptions(target, apiKey),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Falha ao buscar ${target.name}: ${response.status} ${response.statusText}`);
    }

    const payload = await response.json();
    const finalPayload = pickPayload(payload, target);
    const outputPath = path.resolve(__dirname, '..', target.output);
    ensureDirectory(outputPath);
    const serialized = JSON.stringify(finalPayload, null, 2);
    fs.writeFileSync(outputPath, serialized, 'utf8');

    return {
      name: target.name,
      output: target.output,
      bytesWritten: Buffer.byteLength(serialized, 'utf8'),
      updatedAt: new Date().toISOString(),
    };
  } finally {
    clearTimeout(abortTimeout);
  }
};

const updateAllData = async (options = {}) => {
  const apiKey = options.apiKey || process.env.LEAGUES_API_KEY;
  const baseUrl = options.baseUrl || process.env.LEAGUES_API_BASE_URL;
  const timeout = options.timeout || defaultTimeout;

  if (!targets.length) {
    throw new Error('Nenhum alvo configurado em config/update-targets.json.');
  }

  const results = [];
  for (const target of targets) {
    if (target.disabled) {
      continue;
    }
    const result = await updateSingleTarget(target, { apiKey, baseUrl, timeout });
    results.push(result);
  }

  return results;
};

module.exports = {
  updateAllData,
  updateSingleTarget,
};
