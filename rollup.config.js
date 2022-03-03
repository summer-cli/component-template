import vuePlugin from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import typescript from 'rollup-plugin-typescript2';
import resolvePlugin from '@rollup/plugin-node-resolve';

const overides = {
    compilerOptions: {
        declaration: true
    },
    exclude: ['node_modules']
}


export default {
    input: 'src/lib/index.ts',
    output: {
        name: 'index',
        file: 'dist/index.esm.js',
        format: 'es'
    },
    external: ['vue', 'vue-class-component'],
    plugins: [
        vuePlugin(),
        css({
            output: 'bundle.css'
        }),
        typescript({
            tsconfigOverride: overides 
        }),
        resolvePlugin()
    ]
}