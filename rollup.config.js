import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import inject from 'rollup-plugin-inject';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

const plugins = [
  resolve({
    jsnext: true,
    main: true,
    browser: true,
  }),
  commonjs(),
  inject({
    include: '**/*.js',
    exclude: 'node_modules',
    $: 'jquery',
    modules: {
      $: 'jquery',
      jQuery: 'jquery',
    },
  }),
  babel({
    exclude: 'node_modules/**',
  })
];

// rollup.config.js
export default [
  {
    input: 'src/header.js',
    output: {
      file: 'public/header.min.js',
      format: 'cjs',
    },
    plugins,
  },
];