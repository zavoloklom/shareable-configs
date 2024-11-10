import { defineConfig } from 'eslint/config';
import baseConfig from '../../eslint.config.mjs';

export default defineConfig([
  ...baseConfig,
  {
    ignores: [
      'eslint.config.{js,cjs,mjs,ts,cts,mts}',
      'rollup.config.{js,ts,mjs,mts,cjs,cts}',
    ],
  },
]);
