/**
 * @gv-tech/eslint-config
 *
 * Shareable ESLint configuration for Garcia Ventures projects. Supports ESLint v9+ flat config format.
 */

// Import for creating combined presets
import { base, commonIgnores, jsFiles } from './base.mjs';
import { next, nextIgnores, nextjs } from './next.mjs';
import { prettier } from './prettier.mjs';
import { allJsTsFiles, tsFiles, typescript } from './typescript.mjs';

// Re-export individual configurations
export { allJsTsFiles, base, commonIgnores, jsFiles, next, nextIgnores, nextjs, prettier, tsFiles, typescript };

/** Recommended configuration for TypeScript projects with Prettier. Combines TypeScript and Prettier configurations. */
export const recommended = [...typescript, ...prettier];

/** Base configuration preset for simple JavaScript projects. */
export const javascript = [...base];

/** Recommended configuration for JavaScript projects with Prettier. */
export const javascriptRecommended = [...base, ...prettier];

// Default export is the recommended TypeScript + Prettier config
export default recommended;
