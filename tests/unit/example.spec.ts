import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../../src/components/hello/index.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    // console.log(wrapper.get('.hello'));
    expect(wrapper.find('.hello').exists()).toBe(true)
    expect(wrapper.find('.hello').text()).toEqual(msg)
  })
})
