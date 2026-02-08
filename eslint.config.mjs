/** ESLint configuration for this package's development */
import { recommended } from './src/index.mjs';

export default [
  ...recommended,
  {
    ignores: ['test/fixtures/**'],
  },
];
