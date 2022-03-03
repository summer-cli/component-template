import { Vue } from 'vue-class-component';
import { openBlock, createElementBlock } from 'vue';

// interface ITest {
//   [propName: string]: any;
// }
class HelloWorld extends Vue {
}

const _hoisted_1 = { class: "hello" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, " hello "))
}

HelloWorld.render = render;
HelloWorld.__scopeId = "data-v-3be71616";
HelloWorld.__file = "src/components/hello/index.vue";

export { HelloWorld as default };
