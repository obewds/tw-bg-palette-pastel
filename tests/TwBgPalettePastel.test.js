// ./tests/TwBgPalettePastel.test.js

import { mount } from '@vue/test-utils'
import TwBgPalettePastel from '../src/components/TwBgPalettePastel.vue'



test('TwBgPalettePastel.vue component mounts successfully', async () => {

    expect(TwBgPalettePastel).toBeTruthy()

})



test('TwBgPalettePastel.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(TwBgPalettePastel, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('TwBgPalettePastel.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(TwBgPalettePastel, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})
