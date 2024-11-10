# @zavoloklom/prettier-config

[Prettier](https://prettier.io/) shareable config.

## Install

Install the package using `npm` (or `yarn`)

```sh
npm install --save-dev @zavoloklom/prettier-config
```

## Usage

### `package.json`

```json
{
  "prettier": "@zavoloklom/prettier-config"
}
```

### `.prettierrc`

```prettier
"@zavoloklom/prettier-config"
```

### `.prettierrc.mjs`

```javascript
import zavoloklomPrettierConfig from '@zavoloklom/prettier-config';

const config = {
  ...zavoloklomPrettierConfig,
  // override rules
};

export default config;
```

Check out the [`prettier` documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations) for more
info on sharing configurations.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
