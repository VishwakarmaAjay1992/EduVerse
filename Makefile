.PHONY: help install bootstrap dev up down logs test test-e2e lint format typecheck db-reset ci

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
	  awk 'BEGIN {FS = ":.*?## "}; {printf "  %-14s %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

bootstrap: ## First-time setup (env, deps, services, prisma)
	./scripts/bootstrap.sh

dev: ## Start infrastructure + dev server
	./scripts/dev.sh

up: ## Start all containers
	docker compose up -d

down: ## Stop all containers
	docker compose down

logs: ## Tail container logs
	docker compose logs -f

test: ## Run unit tests
	npm run test

test-e2e: ## Run Playwright e2e tests
	npm run test:e2e

lint: ## Lint the codebase
	npm run lint

format: ## Format the codebase
	npm run format

typecheck: ## Type-check the codebase
	npm run typecheck

db-reset: ## Reset the local database (destructive)
	./scripts/db-reset.sh

ci: ## Run the full CI gate locally
	npm run typecheck && npm run lint && npm run format:check && npm run test && npm run build
