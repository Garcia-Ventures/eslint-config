import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const fixturesDir = join(__dirname, 'fixtures');

/**
 * Run ESLint on a fixture and check for specific output patterns.
 *
 * @param {string} fixtureName Name of the folder in test/fixtures
 * @param {Object} options Validation options
 * @param {string[]} options.expectErrors List of strings that must appear in output
 * @param {boolean} options.shouldFail Whether the command is expected to exit with non-zero code
 * @param {Object} options.env Additional environment variables
 */
function verifyFixture(fixtureName, options = {}) {
  const fixturePath = join(fixturesDir, fixtureName);
  console.log(`\n🔍 Verifying fixture: ${fixtureName}...`);

  try {
    // Run eslint from the root package's node_modules but using the fixture's config
    const cmd = `yarn eslint . --config eslint.config.mjs --no-ignore`;
    const output = execSync(cmd, {
      cwd: fixturePath,
      encoding: 'utf8',
      stdio: 'pipe',
      env: { ...process.env, ...options.env },
    });

    if (options.shouldFail) {
      console.error(`❌ Expected '${fixtureName}' to fail, but it passed.`);
      process.exit(1);
    }

    validateOutput(output, options.expectErrors || []);
    console.log(`✅ ${fixtureName} passed validation.`);
  } catch (error) {
    const output = error.stdout + error.stderr;
    if (options.shouldFail) {
      validateOutput(output, options.expectErrors || []);
      console.log(`✅ ${fixtureName} failed as expected with correct error message.`);
    } else {
      console.error(`❌ ${fixtureName} failed unexpectedly:`);
      console.error(output);
      process.exit(1);
    }
  }
}

function validateOutput(output, expectedErrors) {
  for (const pattern of expectedErrors) {
    if (!output.includes(pattern)) {
      console.error(`❌ Missing expected pattern in output: "${pattern}"`);
      console.error('Full output:', output);
      process.exit(1);
    }
  }
}

// Ensure we are in the root directory
if (!existsSync(fixturesDir)) {
  console.error('Error: fixtures directory not found.');
  process.exit(1);
}

// 1. Base JS Fixture
verifyFixture('base-js');

// 2. TypeScript Fixture
verifyFixture('typescript');

// 3. Next.js Plugin Missing Fixture
verifyFixture('next-plugin-missing', {
  expectErrors: ["Next.js ESLint configuration was requested but '@next/eslint-plugin-next' is not installed"],
  shouldFail: true,
  env: { ESLINT_CONFIG_FORCE_MISSING_NEXT: 'true' },
});

// 4. Next.js Project Fixture (Requires plugin to be installed in the root node_modules for this test context)
// Note: We skip this if the runner doesn't have the plugin installed to allow partial testing
try {
  verifyFixture('next-project');
} catch {
  console.warn('⚠️ Skipping next-project validation: ensure @next/eslint-plugin-next is installed in root.');
}

console.log('\n✨ All validations complete!');
