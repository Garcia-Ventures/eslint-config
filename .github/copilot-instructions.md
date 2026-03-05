# Copilot Instructions

This repository contains the ESLint configuration for Garcia Ventures projects, supporting ESLint v9+ flat config format.

## General Principles

- Follow ESM (ECMAScript Modules) standards. Use `.mjs` extensions for JavaScript files.
- Ensure all configurations are compatible with ESLint v9 and v10 flat config.
- Maintain a modular structure in `src/`. Export clear, reusable configuration blocks.
- Use JSDoc for documenting shared configurations and exportable constants.

## Project Structure

- `src/`: Core configuration files.
  - `base.mjs`: Essential rules and ignoring defaults.
  - `typescript.mjs`: TypeScript-specific rules and parser settings.
  - `next.mjs`: Next.js plugin and environment settings.
  - `prettier.mjs`: Prettier integration.
  - `index.mjs`: Main entry point, providing `recommended`, `javascript`, and `javascriptRecommended` presets.

## Testing Standards

- Use `vitest` or `mocha` (refer to `package.json` for the current test runner).
- Verify configurations using the fixtures in `test/fixtures/`.
- Ensure new rules or plugins are tested against their respective fixture (e.g., `base-js`, `typescript`, `next-project`).

## Coding Conventions

- Favor standard JavaScript over complex abstractions where possible.
- When adding new plugins, ensure they are imported correctly for flat config usage.
- Keep dependency versions in `package.json` synchronized with the supported ESLint versions.
