# Contributing to Next.js Boilerplate

If you're reading this, you're awesome! Thank you for being a part of the community and helping us make this project great. Here are a few guidelines that will help you along the way.

## Code of conduct

We have adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as our code of conduct, and we expect project participants to adhere to it. Please read the [Code of Conduct](CODE_OF_CONDUCT.md) to understand what actions will and will not be tolerated.

## Prerequisites

Before contributing, make sure your development environment meets the project's requirements.

- Node.js version specified in `.nvmrc`
- npm
- Git

## Your first pull request

Working on your first pull request? You can learn how in this free video series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

Get started with [good first issues](https://github.com/vicasas/next.js-boilerplate/issues?q=is:open+is:issue+label:"good+first+issue"), which have a limited scope and a working solution that's already been discussed. This makes them ideal for newer developers, or those who are new to the project and want to see how the contribution process works.

We also have a list of [ready to take issues](https://github.com/vicasas/next.js-boilerplate/issues?q=is:open+is:issue+label:"ready+to+take"), which are issues that have already been at least partially resolved in discussion, to the point that it's clear what to do next. These issues are great for developers who want to reduce their chances of falling down a rabbit hole in search of a solution.

Of course, you can work on any other issue you like—the "good first" and "ready to take" issues are simply those where the scope and timeline may be better defined. Pull requests for other issues, or completely novel problems, may take a bit longer to review if they don't fit into our current development cycle.

If you decide to fix an issue, please make sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you've started to work on it, so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up after more than a week, it's fine to take over, but you should still leave a comment. If there has been no activity on the issue for 7 to 14 days, then it's safe to assume that nobody is working on it.

## Sending a pull request

Next.js Boilerplate is a community-driven project, so pull requests are always welcome, but before working on a large change, it's best to open an issue first to discuss it with the maintainers.

When in doubt, keep your pull requests small. For the best chances of being accepted, don't bundle more than one feature or bug fix per PR. It's often best to create two smaller PRs rather than one big one.

1. Fork the repository.

2. Clone the fork to your local machine and add the upstream remote:

```bash
git clone https://github.com/<your username>/next.js-boilerplate.git
cd next.js-boilerplate
git remote add upstream https://github.com/vicasas/next.js-boilerplate.git
```

3. Synchronize your local `main` branch with the upstream one:

```bash
git switch main
git pull upstream main
```

4. Install the dependencies with npm:

```bash
npm install
```

5. Create a new topic branch:

```bash
git switch -c my-topic-branch
```

6. Make changes, commit, and push to your fork:

```bash
git push -u origin HEAD
```

7. Go to [the repository](https://github.com/vicasas/next.js-boilerplate) and open a pull request.

The maintainers actively monitor for new pull requests. We will review your PR and either merge it, request changes to it, or close it with an explanation.

## Trying changes

The project includes a local development environment that allows you to test and experiment with your changes before submitting a pull request.

To start the development server, run:

```bash
npm run dev
```

Once the server is running, open http://localhost:3000 in your browser.

Changes made to the source code are automatically reflected during development.

## Coding style

Please follow the coding style of the project. It uses Prettier and ESLint, so if possible, enable linting in your editor to get real-time feedback.

The following commands are available:

- `npm run lint` checks the code with ESLint.
- `npm run lint:fix` automatically fixes fixable ESLint issues.
- `npm run format` checks the code formatting with Prettier.
- `npm run format:fix` formats the code with Prettier.

When you submit a PR, the check commands are run again by our continuous integration tools, but hopefully your code is already clean!

## Security

For information about reporting security vulnerabilities, please see the [Security Policy](SECURITY.md).

## License

By contributing your code to the [vicasas/next.js-boilerplate](https://github.com/vicasas/next.js-boilerplate) GitHub repository, you agree to license your contribution under the [MIT License](LICENSE).
