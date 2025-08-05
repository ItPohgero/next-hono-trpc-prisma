# Project Setup

## 1. Install Bun

First, install [Bun](https://bun.sh/) on your system:

```sh
curl -fsSL https://bun.sh/install | bash
```

## 2. Install Dependencies
Navigate to the project directory and install the dependencies:

```sh
bun install
```

## 3. Start the Development Server
To start the development server, run:
```sh
bun run dev
```

## 4. Makefile Explanation

This project includes a Makefile to help with formatting, linting (using biome), and Prisma tasks:

| Target              | Description                                                        | Example Usage                                 |
|---------------------|--------------------------------------------------------------------|-----------------------------------------------|
| format              | Formats all files in the project                                   | `make format`                                 |
| format-files        | Formats specific files                                             | `make format-files files="src/App.tsx"`       |
| lint                | Lints all files and applies safe fixes                             | `make lint`                                   |
| lint-files          | Lints specific files                                               | `make lint-files files="src/App.tsx"`         |
| check               | Formats, lints, and organizes imports for all files                | `make check`                                  |
| check-files         | Runs the check on specific files                                   | `make check-files files="src/App.tsx"`        |
| prisma-generate     | Generates Prisma client                                            | `make prisma-generate`                        |
| prisma-migrate-dev  | Runs Prisma migrations in development                              | `make prisma-migrate-dev`                     |
| prisma-studio       | Opens Prisma Studio                                                | `make prisma-studio`                          |
| seed                | Seeds the database with initial data                             | `make seed`                                   |