import { openBlock, createElementBlock, toDisplayString } from 'vue';

var script = {
    props: ['msg']
};

const _hoisted_1 = { class: "hello" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString($props.msg), 1 /* TEXT */))
}

script.render = render;
script.__scopeId = "data-v-3be71616";
script.__file = "src/components/hello/index.vue";

export { script as default };
