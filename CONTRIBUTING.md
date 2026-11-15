# Contributing to next.js-boilerplate

If you're reading this, you're awesome! Thank you for being part of the community and helping us make this project great. Here are a few guidelines to help you along the way.

## Table of contents

- [Code of conduct](#code-of-conduct)
- [Ways to contribute](#ways-to-contribute)
- [Prerequisites](#prerequisites)
- [Your first pull request](#your-first-pull-request)
- [Sending a pull request](#sending-a-pull-request)
- [Development guidelines](#development-guidelines)
  - [Trying changes](#trying-changes)
  - [Coding style](#coding-style)
  - [Testing and validation](#testing-and-validation)
- [Reporting issues](#reporting-issues)
- [Community discussions](#community-discussions)
- [Security](#security)
- [License](#license)

## Code of conduct

We have adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as our code of conduct, and we expect all project participants to adhere to it. Please read the [Code of Conduct](CODE_OF_CONDUCT.md) to understand the standards of behavior expected when participating in this project.

## Ways to contribute

There are many ways to contribute to this project, and writing code is only one part of the story. Improving documentation, reporting bugs, suggesting features, and participating in discussions are equally valuable contributions.

If you have an idea for an improvement, we encourage you to open an Issue or start a Discussion to share your proposal and gather feedback from the maintainers and community.

## Prerequisites

Before contributing, make sure your development environment meets the following requirements:

- [Git](https://git-scm.com/) installed.
- [Node.js](https://nodejs.org/) using the version specified in `.nvmrc`.
- npm, included with Node.js.
- A [GitHub](https://github.com/) account.

We recommend using a Node.js version manager, such as [nvm](https://github.com/nvm-sh/nvm), to install and switch between Node.js versions.

## Your first pull request

Working on your first pull request? You can learn how in this free video series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

Get started with [good first issues](https://github.com/vicasas/next.js-boilerplate/issues?q=is:open+is:issue+label:"good+first+issue"), which have a limited scope and a working solution that's already been discussed. This makes them ideal for newer developers, or those who are new to the project and want to see how the contribution process works.

We also have a list of [ready to take issues](https://github.com/vicasas/next.js-boilerplate/issues?q=is:open+is:issue+label:"ready+to+take"), which are issues that have already been at least partially resolved in discussion, to the point that it's clear what to do next. These issues are great for developers who want to reduce their chances of falling down a rabbit hole in search of a solution.

Of course, you can work on any other issue you like—the "good first" and "ready to take" issues are simply those where the scope and timeline may be better defined. Pull requests for other issues, or completely novel problems, may take a bit longer to review if they don't fit into our current development cycle.

If you decide to fix an issue, please make sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you've started to work on it, so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up after more than a week, it's fine to take over, but you should still leave a comment. If there has been no activity on the issue for 7 to 14 days, then it's safe to assume that nobody is working on it.

## Sending a pull request

This project is community-driven, so pull requests are always welcome! However, before working on a large change, it's best to open an issue first to discuss your proposal with the maintainers.

When in doubt, keep your pull requests small and focused. For the best chances of being accepted, avoid bundling multiple features or bug fixes into a single pull request. It's often better to create two smaller pull requests rather than one large one.

1. Fork the repository to your GitHub account.

2. Clone your fork to your local machine and add the original repository as an upstream remote:

```bash
git clone https://github.com/<your-username>/next.js-boilerplate.git
cd next.js-boilerplate
git remote add upstream https://github.com/vicasas/next.js-boilerplate.git
```

3. Synchronize your local `main` branch with the upstream repository:

```bash
git switch main
git pull upstream main
```

4. Install the project dependencies with npm:

```bash
npm install
```

5. Create a new topic branch for your changes:

```bash
git switch -c my-topic-branch
```

6. Make changes, commit, and push your branch to your fork:

```bash
git add .
git commit -m "Description of your changes"
git push -u origin HEAD
```

7. Go to [the repository](https://github.com/vicasas/next.js-boilerplate) and open a pull request.

The maintainers actively monitor new pull requests. We will review your contribution and either merge it, request changes, or close it with an explanation.

## Development guidelines

Please follow these guidelines to keep the project consistent, maintainable, and reliable.

### Trying changes

The project includes a local development environment that allows you to test your changes before submitting a pull request.

To start the development server, run:

```bash
npm run dev
```

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser.

Changes made to the source code are automatically reflected in the browser, allowing you to see the results as you work.

### Coding style

Please follow the coding style of the project. It uses Prettier and ESLint to maintain consistent code formatting and quality.

For a better developer experience, we recommend installing the editor extensions listed in [`.vscode/extensions.json`](.vscode/extensions.json). These extensions provide editor integrations and real-time feedback while you work.

**Check your code**

The following commands are available to check your code without modifying any files:

- `npm run lint` checks the code with ESLint.
- `npm run format` checks code formatting with Prettier.

**Automatically fix issues**

The following commands automatically fix issues whenever possible:

- `npm run lint:fix` automatically fixes fixable ESLint issues.
- `npm run format:fix` automatically formats the code with Prettier.

**Pre-commit checks**

The project uses [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged) to run automated checks before each commit.

When you create a commit, Husky triggers lint-staged to run ESLint and Prettier on JavaScript and TypeScript files, and Prettier on other supported file types, such as stylesheets, markup, documentation, and configuration files.

For staged TypeScript files, the hook runs the project-wide type check after formatting.

These checks help catch formatting and linting issues before changes are committed.

### Testing and validation

Before submitting a pull request, make sure your changes work as expected and do not introduce regressions.

The following commands are available:

**Type checking**

- `npm run typecheck` generates Next.js types and runs TypeScript checks.

**Unit tests**

- `npm test` runs the Jest test suite.
- `npm run test:watch` runs Jest in watch mode.
- `npm run test:coverage` runs the tests and generates a coverage report.
- `npm run test:ci` runs Jest in CI mode with coverage enabled.

The coverage report includes source files in `src/` even when no test imports them.

**End-to-end tests**

- `npm run test:e2e` runs the Playwright end-to-end test suite.

> [!NOTE]
> End-to-end tests run against the production build. Run `npm run build` before executing the tests, and rebuild whenever application changes are made.

**Production build**

- `npm run build` creates an optimized production build of the application.

Please run the relevant checks for your changes before submitting a pull request. If a check fails, investigate and resolve the issue before submitting your contribution.

## Reporting issues

Found a bug, have a feature request, or noticed something that could be improved? We appreciate you taking the time to share your feedback.

Before opening a new issue, please search the existing [issues](https://github.com/vicasas/next.js-boilerplate/issues) to see whether your concern has already been reported or discussed.

When you're ready, [open a new issue](https://github.com/vicasas/next.js-boilerplate/issues/new/choose) and select the appropriate template. Please provide as much relevant information as possible to help maintainers understand your report and address it effectively.

## Community discussions

Have a question, an idea, or something you'd like to discuss? Feel free to start a [GitHub Discussion](https://github.com/vicasas/next.js-boilerplate/discussions).

Discussions are a great place to ask questions, share ideas, suggest improvements, and connect with other contributors. They also provide an opportunity to gather feedback from the maintainers and community before proposing changes to the project.

## Security

For information about reporting security vulnerabilities, please see [SECURITY.md](SECURITY.md).

## License

By contributing to this repository, you agree that your contributions will be licensed under the project's [MIT License](LICENSE), subject to its terms and conditions.

Thank you for helping improve next.js-boilerplate!
