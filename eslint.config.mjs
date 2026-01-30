import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import pluginJest from 'eslint-plugin-jest'
import pluginJestDom from 'eslint-plugin-jest-dom'
import pluginPlaywright from 'eslint-plugin-playwright'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginTestingLibrary from 'eslint-plugin-testing-library'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintPluginPrettierRecommended,
  // Jest + Testing Library + jest-dom
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    plugins: {
      jest: pluginJest,
      'testing-library': pluginTestingLibrary,
      'jest-dom': pluginJestDom,
    },
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
      'jest/padding-around-all': 'error',
      ...pluginTestingLibrary.configs['flat/react'].rules,
      ...pluginJestDom.configs['flat/recommended'].rules,
    },
  },
  // Playwright
  {
    files: ['test/e2e/**/*.spec.tsx'],
    plugins: { playwright: pluginPlaywright },
    rules: { ...pluginPlaywright.configs['flat/recommended'].rules },
  },
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
