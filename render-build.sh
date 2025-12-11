#!/usr/bin/env bash
set -euo pipefail

# Garantir instalação de dependências (incluindo dev) na raiz
npm install --include=dev

# Garantir instalação de dependências (incluindo dev) e build do frontend
cd frontend
npm install --include=dev
npm run build
