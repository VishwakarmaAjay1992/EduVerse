#!/usr/bin/env bash
# First-time developer setup for EduVerse.
set -euo pipefail

echo "▶ Bootstrapping EduVerse development environment"

if [ ! -f .env ]; then
  cp .env.example .env
  echo "  • created .env from .env.example"
else
  echo "  • .env already exists — leaving it untouched"
fi

echo "  • installing dependencies"
npm install

echo "  • starting infrastructure (postgres, redis, mailhog, adminer)"
docker compose up -d postgres redis mailhog adminer

echo "  • generating Prisma client"
npm run prisma:generate

echo "✓ Bootstrap complete. Run 'npm run dev' to start the app."
