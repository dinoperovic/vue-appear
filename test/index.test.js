import { mount, createLocalVue } from '@vue/test-utils'
import VueAppear from '../src'

const localVue = createLocalVue()
localVue.use(VueAppear)

test('appear class added', () => {
  const Component = { template: '<div class="first" v-appear.immediate></div>' }
  const wrapper = mount(Component, { localVue })
  // TODO: add tests
})
