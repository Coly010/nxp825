const { withNx } = require('@nx/rollup/with-nx');

// These options were migrated by @nx/rollup:convert-to-inferred from project.json
const options = {
  outputPath: '../../dist/libs/lib1',
  tsConfig: './tsconfig.lib.json',
  project: './package.json',
  entryFile: 'libs/lib1/src/index.ts',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  compiler: 'babel',
  assets: [
    {
      glob: 'libs/lib1/README.md',
      input: '.',
      output: '.',
    },
  ],
};

let config = withNx(options, {
  // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
  // e.g.
  // output: { sourcemap: true },
});

config = require('@nx/react/plugins/bundle-rollup')(config, options);

module.exports = config;
