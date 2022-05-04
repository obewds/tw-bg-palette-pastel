// ./tests/TwBgPalettePastel.test.js

import { twBgPalettePastel } from '../src/index'



test('twBgPalettePastel component returns a truthy value', async () => {

    expect(twBgPalettePastel).toBeTruthy()

})



test('twBgPalettePastel.pastel component returns an object with a truthy pastel property', async () => {

    expect(twBgPalettePastel.pastel).toBeTruthy()

})



test('twBgPalettePastel.pastel.colors component returns an object with a truthy colors property', async () => {

    expect(twBgPalettePastel.pastel.colors).toBeTruthy()

})



test('twBgPalettePastel component returns an object with the standard five default color names', async () => {

    expect(twBgPalettePastel.pastel.colors['default']).toBeTruthy()
    expect(twBgPalettePastel.pastel.colors['error']).toBeTruthy()
    expect(twBgPalettePastel.pastel.colors['primary']).toBeTruthy()
    expect(twBgPalettePastel.pastel.colors['secondary']).toBeTruthy()
    expect(twBgPalettePastel.pastel.colors['success']).toBeTruthy()

})
