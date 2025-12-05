# Sistema de atualização com chave API

Este fluxo garante que as atualizações dos dados das ligas usem a sua chave privada em qualquer automação (CLI ou requisições HTTP).

## 1. Configure o arquivo `.env`

1. Copie `.env.example` para `.env`.
2. Preencha:
   - `LEAGUES_API_KEY`: a chave fornecida pelo provedor.
   - `LEAGUES_API_BASE_URL`: URL base do serviço que entrega as informações das ligas.
   - `DATA_UPDATE_TIMEOUT_MS` (opcional): timeout em ms para cada requisição.

## 2. Ajuste os alvos em `config/update-targets.json`

Cada entrada define uma requisição que deve ser feita ao provedor e o arquivo local que receberá os dados. Campos disponíveis:

- `name`: identificação do alvo.
- `endpoint`: caminho relativo à `LEAGUES_API_BASE_URL`.
- `method`: HTTP method (padrão GET).
- `output`: caminho do arquivo local a ser sobrescrito.
- `query`, `headers`, `body`, `pick` (opcionais) para casos específicos.

## 3. Rodando via CLI

```bash
npm run update:data
```

O script usa a chave presente no `.env`, busca todos os alvos configurados e substitui os arquivos em `public/data`. O log mostra quantos bytes foram gravados em cada arquivo.

## 4. Próximos passos

- Automatize o comando `npm run update:data` em CRON ou Jobs do Render.
- Versione apenas `.env.example`; mantenha `.env` fora do Git.
- Ajuste `config/update-targets.json` sempre que novos arquivos precisarem ser sincronizados.
