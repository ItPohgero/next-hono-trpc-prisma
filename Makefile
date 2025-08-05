.PHONY: format format-files lint lint-files check check-files prisma-generate prisma-migrate-dev prisma-studio seed

# Format all files
format:
	bunx biome format --write

# Format specific files: make format-files files="src/App.tsx"
format-files:
	bunx biome format --write $(files)

# Lint and apply safe fixes to all files
lint:
	bunx biome lint --write

# Lint specific files: make lint-files files="src/App.tsx"
lint-files:
	bunx biome lint --write $(files)

# Format, lint, and organize imports of all files
check:
	bunx biome check --write

# Check specific files: make check-files files="src/App.tsx"
check-files:
	bunx biome check --write $(files)

# Prisma: generate client
prisma-generate:
	bunx prisma generate

# Prisma: run migrations in development
prisma-migrate-dev:
	bunx prisma migrate dev

# Prisma: open Prisma Studio
prisma-studio:
	bunx prisma studio

seed:
     bun run prisma/seed.ts