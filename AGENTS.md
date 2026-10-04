<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project instructions

Instructions for AI agents working with the Next.js Boilerplate repository.

## Repository overview

This repository is a production-ready Next.js 16 App Router boilerplate for building modern web applications with a structured, scalable, and maintainable foundation.

## Tech Stack

The following technologies materially affect how code should be written:

| Category        | Technology            | Version | Purpose                              |
| --------------- | --------------------- | ------- | ------------------------------------ |
| Runtime         | Node.js               | 22.x    | JavaScript runtime                   |
| Package Manager | npm                   | 10.x    | Dependency and package management    |
| Framework       | Next.js               | 16.x    | React framework using the App Router |
| UI Library      | React                 | 19.x    | User interface library               |
| Language        | TypeScript            | 5.x     | Primary programming language         |
| Styling         | Tailwind CSS          | 4.x     | Utility-first CSS framework          |
| Linting         | ESLint                | 9.x     | Static analysis and code quality     |
| Formatting      | Prettier              | 3.x     | Code formatting                      |
| Testing         | Jest                  | 30.x    | Unit and integration testing         |
| Testing         | React Testing Library | 16.x    | React component testing              |
| Testing         | Playwright            | 1.x     | End-to-end testing                   |

## Repository Structure

The repository follows a structured Next.js App Router architecture. The `src/app/` directory is reserved for application routing and route-level composition.

```text
src/
├── app/              # Next.js App Router: routing and route-level composition
├── components/       # Reusable React components
├── hooks/            # Reusable React hooks
├── utils/            # Framework-agnostic utility functions
├── services/         # Application services and external API integrations
├── types/            # Shared TypeScript types and interfaces
├── constants/        # Shared application constants
├── config/           # Application and feature configuration
├── providers/        # React context and application providers
└── styles/           # Shared styles and style-related resources
```

### Structure Guidelines

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
