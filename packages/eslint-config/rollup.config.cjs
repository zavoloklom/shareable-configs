const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: './src/index.ts',
    // useLegacyTypescriptPlugin: false,
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', 'cjs'],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    //output: { sourcemap: false },
  },
);
