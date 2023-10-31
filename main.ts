/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Oct 2023 
 * This program ...
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
  loopCounter = 0
  basic.clearScreen()
    while (loopCounter <= 5) {
        basic.showNumber(4)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.show()
        pause(1000)
        basic.clearScreen()
        basic.showNumber(3)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        pause(1000)
        basic.clearScreen()
        basic.showNumber(2)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        pause(1000)
        basic.clearScreen()
        basic.showNumber(1)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        pause(1000)
        basic.clearScreen()
        basic.showNumber(0)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        loopCounter = loopCounter + 1
    }
})