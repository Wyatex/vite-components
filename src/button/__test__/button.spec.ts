import Button from '../Button'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

// 测试分组
describe('Button', () => {
  // mount
  test('mount  @vue/test-utils', () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    })

    // 断言
    expect(wrapper.text()).toBe('Button')
  })
})

describe('color', () => {
  test('default', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    })
    const values = wrapper.classes().some(className => /^bg-blue-500/.test(className))
    expect(values).toBe(true)
  })

})
