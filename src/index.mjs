/**
 * @gv-tech/eslint-config
 *
 * Shareable ESLint configuration for Garcia Ventures projects.
 * Supports ESLint v9+ flat config format.
 *
 * @example Basic JavaScript
 * ```js
 * import { base } from '@gv-tech/eslint-config';
 * export default [...base];
 * ```
 *
 * @example TypeScript
 * ```js
 * import { typescript, prettier } from '@gv-tech/eslint-config';
 * export default [...typescript, ...prettier];
 * ```
 *
 * @example Next.js
 * ```js
 * import { next, prettier } from '@gv-tech/eslint-config';
 * export default [...next, ...prettier];
 * ```
 */

// Import for creating combined presets
import { base, jsFiles, commonIgnores } from './base.mjs';
import { typescript, tsFiles, allJsTsFiles } from './typescript.mjs';
import { next, nextIgnores } from './next.mjs';
import { prettier } from './prettier.mjs';

// Re-export individual configurations
export { base, jsFiles, commonIgnores };
export { typescript, tsFiles, allJsTsFiles };
export { next, nextIgnores };
export { prettier };

/**
 * Recommended configuration for TypeScript projects with Prettier.
 * Combines TypeScript and Prettier configurations.
 */
export const recommended = [...typescript, ...prettier];

/**
 * Recommended configuration for Next.js projects with Prettier.
 * Combines Next.js (which includes TypeScript) and Prettier configurations.
 */
export const nextjs = [...next, ...prettier];

/**
 * Base configuration preset for simple JavaScript projects.
 */
export const javascript = [...base];

// Default export is the recommended TypeScript + Prettier config
export default recommended;
