# EduVerse

A subject-agnostic education knowledge platform. This repository is the application foundation (Batch 1): configuration, tooling, and the production folder structure that every feature module builds on.

## Tech stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS** · **shadcn/ui**
- **Prisma** · **PostgreSQL** (pgvector)
- **Redis**
- **Docker** / Docker Compose

## Requirements

- Node.js 20+
- Docker & Docker Compose (for the local database, cache, and mail stack)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Create your environment file
cp .env.example .env

# 3. Start Postgres, Redis, Mailhog and Adminer
docker compose up -d postgres redis mailhog adminer

# 4. Generate the Prisma client
npm run prisma:generate

# 5. Run the dev server
npm run dev
```

The app runs at http://localhost:3000. A health probe is available at `/api/v1/health`.

Supporting services when running via Docker Compose:

| Service  | URL / Port            | Purpose               |
| -------- | --------------------- | --------------------- |
| Web      | http://localhost:3000 | Next.js application   |
| Postgres | localhost:5432        | Primary database      |
| Redis    | localhost:6379        | Cache / rate limiting |
| Mailhog  | http://localhost:8025 | Captured dev emails   |
| Adminer  | http://localhost:8080 | Database browser      |

## Scripts

| Script                    | Description                   |
| ------------------------- | ----------------------------- |
| `npm run dev`             | Start the development server  |
| `npm run build`           | Production build              |
| `npm run start`           | Start the production server   |
| `npm run lint`            | Lint with ESLint              |
| `npm run format`          | Format with Prettier          |
| `npm run typecheck`       | Type-check with `tsc`         |
| `npm run prisma:generate` | Generate the Prisma client    |
| `npm run prisma:migrate`  | Run database migrations (dev) |

## Project structure

```
src/
├── app/                 Next.js App Router (UI + API route handlers)
│   └── api/v1/           versioned REST endpoints
├── modules/             domain modules (identity, catalog, content, …)
├── core/                cross-cutting building blocks (db, cache, auth, rbac, …)
├── dto/                 shared Zod request/response contracts
├── components/ui/       design-system components (shadcn/ui)
├── lib/                 shared utilities
├── hooks/               React hooks
└── types/               shared type declarations

prisma/                  schema + seeds
database/                raw SQL schema & migrations
tests/                   unit · integration · e2e
docker/                  container assets
scripts/                 automation scripts
documentation/           architecture & phase docs
```

## License

Proprietary — all rights reserved.
