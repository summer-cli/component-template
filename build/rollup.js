const { rollup } = require('rollup');
const vuePlugin = require('rollup-plugin-vue');
const css = require('rollup-plugin-css-only') ;
const typescript = require('rollup-plugin-typescript2');
const fileList = require('./fileList');

const resolvePlugin = require('@rollup/plugin-node-resolve').default;

const overides = {
    compilerOptions: {
        declaration: true
    },
    exclude: ['node_modules']
}

// see below for details on the options
const external = {
    external: ['vue', 'vue-class-component']
}
// const plugins = {
//     plugins: [
//         vuePlugin(),
//         css({
//             output: 'bundle.css'
//         }),
//         typescript({
//             tsconfigOverride: overides 
//         }),
//         // resolvePlugin()
//     ]
// }



async function build() {
    fileList.map(async(item) => {
        let bundle;
        if (!item.endsWith('index.ts')) {
            // create a bundle
            bundle = await rollup({
                input: `src/components/${item}/index.vue`,
                output: {
                    name: 'index',
                    file: `lib/${item}/index.js`,
                    format: 'es'
                },
                plugins: [
                    vuePlugin(),
                    css({
                        output: `${item}.css`
                    }),
                    typescript({
                        tsconfigOverride: overides 
                    }),
                    // resolvePlugin()
                ],
                ...external,
            });
            await bundle.write({
                name: 'index',
                file: `lib/${item}/index.js`,
                format: 'es'
            });
            
        } 

        // generate code and a sourcemap
        // const { code, map } = await bundle.generate(outputOptions);

        
    })
  
  
}

module.exports = build;