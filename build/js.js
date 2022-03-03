const gulp = require('gulp');
const ts = require('gulp-typescript');
// const alias = require('gulp-miniprogram-path-alias');
// const preprocess = require('gulp-preprocess');

const tsProject = ts.createProject('./tsconfig.json', {
    noEmitOnError: false,
});
const path = require('path');
// const devConf = require('../../config/dev');
// const prodConf = require('../../config/prod');

// const conf = process.env.NODE_ENV === 'prod' ? prodConf : devConf;
// const dist = conf.output;
// const inputSource = conf.input;

// const { aliasConfig } = conf;

function js() {
    const tsResult = gulp
                        .src(path.resolve(__dirname, '../src/components/index.js')) 
                        .pipe(gulp.dest('lib'));// or tsProject.src()
        // .pipe(preprocess({
        //     context: {
        //         NODE_ENV: process.env.NODE_ENV,
        //     },
        // }))
        // .pipe(tsProject());

    return tsResult
}

module.exports = js;
