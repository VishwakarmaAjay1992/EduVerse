#!/usr/bin/env bash
# Recreate the database volume and re-apply migrations. Destructive.
set -euo pipefail

echo "⚠ This will DROP the local database. Ctrl-C to cancel."
sleep 3

docker compose stop postgres
docker compose rm -f postgres
docker volume rm eduverse_postgres_data 2>/dev/null || true
docker compose up -d postgres

echo "  • waiting for postgres to be ready"
until docker compose exec -T postgres pg_isready -U eduverse -d eduverse >/dev/null 2>&1; do
  sleep 1
done

npm run prisma:migrate
echo "✓ Database reset complete."
