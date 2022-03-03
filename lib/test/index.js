import { Vue } from 'vue-class-component';
import { openBlock, createElementBlock } from 'vue';

// interface ITest {
//   [propName: string]: any;
// }
class HelloWorld extends Vue {
}

const _hoisted_1 = { class: "test" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, " test "))
}

HelloWorld.render = render;
HelloWorld.__file = "src/components/test/index.vue";

export { HelloWorld as default };
