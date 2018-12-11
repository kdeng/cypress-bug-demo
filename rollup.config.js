import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';
import inject from 'rollup-plugin-inject';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

const plugins = [
  replace({
    exclude: 'node_modules/**',
    ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    JQUERYMIGRATE: ((process.env.NODE_ENV !== 'production') ? "'jquery-migrate'" : "'jquery-migrate/dist/jquery-migrate.min'"),
  }),
  eslint({
    exclude: [
      'src/styles/**',
    ],
  }),
  resolve({
    jsnext: true,
    main: true,
    browser: true,
  }),
  commonjs({
    namedExports: {
      'node_modules/jquery-migrate/dist/jquery-migrate.min.js': ['migrate'],
    },
  }),
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
  }),
  (process.env.NODE_ENV === 'production' && uglify()),
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