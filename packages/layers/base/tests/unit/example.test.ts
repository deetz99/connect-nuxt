import { describe, test, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HelloWorld from '../../app/components/HelloWorld/Index.vue'

// example test from the person-roles (testing component from there)
describe('Example Test', () => {
  test('Renders HelloWorld component', async () => {
    const wrapper = await mountSuspended(HelloWorld, {})

    expect(wrapper.text()).toContain('Hello World!')
  })
})
