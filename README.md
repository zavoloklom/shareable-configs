# Shareable Configurations

Opinionated shareable configs by Zavoloklom.

This monorepo contains configs:

- eslint-config for Typescript/Node.js
- prettier-config
- TODO: eslint-config for Typescript/React
- TODO: commitlint-config
- TODO: semantic-release-config
- TODO: markdownlint-config
- TODO: stylelint-config

All packages ensure strict coding standards and facilitate coding experience with code hints and navigation.

## Documentation

### eslint-config

```shell
## Generate docs
npx @eslint/config-inspector build --config packages/eslint-config/src/index.ts --outDir docs/inspector-eslint-config
npx serve docs/inspector-eslint-config

## Or run it locally
npx @eslint/config-inspector --config packages/eslint-config/src/index.ts
```

## How to

```shell
npx nx g @nx/js:lib packages/prettier-config
```

- rollup
- eslint

