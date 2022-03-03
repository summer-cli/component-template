const { series, src } = require('gulp');
const rollup = require('./build/rollup');
const js = require('./build/js');
const css = require('./build/css');
const resolveCss = require('./build/resolveCss');


exports.default = series(rollup, js, css, resolveCss);