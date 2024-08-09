import path from 'node:path'

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`

const lintStagedConfig = {
  '**/*.{js,jsx,mjs,ts,tsx,mts}': [buildEslintCommand, buildPrettierCommand],
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': [buildPrettierCommand],
}

export default lintStagedConfig
