import path from 'node:path'

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`

/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  '**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': [
    buildEslintCommand,
    buildPrettierCommand,
  ],
  '**/*.{html,htm,css,scss,less,md,mdx,graphql,gql,json,yml,yaml}': [
    buildPrettierCommand,
  ],
}

export default lintStagedConfig
