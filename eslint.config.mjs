import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJest from 'eslint-plugin-jest'
import pluginTestingLibrary from 'eslint-plugin-testing-library'
import pluginJestDom from 'eslint-plugin-jest-dom'
import pluginPlaywright from 'eslint-plugin-playwright'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const jestRules = {
  ...pluginJest.configs['flat/recommended'].rules,
  'jest/padding-around-all': 'error',
}

const eslintConfig = [
  { ignores: ['.next/'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslintPluginPrettierRecommended,
  // Configuration for Jest.
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    plugins: {
      jest: pluginJest,
      'testing-library': pluginTestingLibrary,
      'jest-dom': pluginJestDom,
    },
    rules: {
      ...jestRules,
      ...pluginTestingLibrary.configs['flat/react'].rules,
      ...pluginJestDom.configs['flat/recommended'].rules,
    },
  },
  // Configuration for Playwright.
  {
    files: ['test/e2e/**/*.spec.tsx'],
    plugins: { playwright: pluginPlaywright },
    rules: { ...pluginPlaywright.configs['flat/recommended'].rules },
  },
]

export default eslintConfig
