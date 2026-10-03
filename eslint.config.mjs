import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import jest from 'eslint-plugin-jest'
import jestDom from 'eslint-plugin-jest-dom'
import playwright from 'eslint-plugin-playwright'
import testingLibrary from 'eslint-plugin-testing-library'
import prettier from 'eslint-config-prettier/flat'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    name: 'project',
    files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],
  },
  {
    name: 'jest',
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    ignores: ['test/e2e/**'],
    extends: [jest.configs['flat/recommended']],
  },
  {
    name: 'jest-dom',
    files: ['**/*.{test,spec}.{jsx,tsx}'],
    ignores: ['test/e2e/**'],
    extends: [jestDom.configs['flat/recommended']],
  },
  {
    name: 'testing-library',
    files: ['**/*.{test,spec}.{jsx,tsx}'],
    ignores: ['test/e2e/**'],
    extends: [testingLibrary.configs['flat/react']],
  },
  {
    name: 'playwright',
    files: ['test/e2e/**/*.{js,jsx,ts,tsx}'],
    extends: [playwright.configs['flat/recommended']],
  },
  // Disable ESLint formatting rules that conflict with Prettier.
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
