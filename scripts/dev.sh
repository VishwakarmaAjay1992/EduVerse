#!/usr/bin/env bash
# Start infrastructure and the Next.js dev server.
set -euo pipefail

docker compose up -d postgres redis mailhog adminer
npm run dev
