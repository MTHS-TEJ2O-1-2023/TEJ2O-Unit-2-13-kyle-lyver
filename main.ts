 /* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Oct 2023 
 * This program counts down with neopixels
*/

// variables
let loopCounter = 0
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// run loop
input.onButtonPressed(Button.A, function () {
  loopCounter = 4
  basic.clearScreen()
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
  
  // 4 neopixels
  while (loopCounter >= 0) {
    basic.showNumber(loopCounter)
    neopixelStrip.show()
    pause(1000)
    
    loopCounter = loopCounter - 1
    neopixelStrip.setPixelColor(loopCounter, neopixel.colors(NeoPixelColors.Black))
    }
})
