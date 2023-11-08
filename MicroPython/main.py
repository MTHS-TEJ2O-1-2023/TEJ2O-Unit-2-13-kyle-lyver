"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

np = neopixel.NeoPixel(pin16, 5)
loopcounter = 4

display.clear()
np[0] = (0, 0, 0)
np[1] = (0, 0, 0)
np[2] = (0, 0, 0)
np[3] = (0, 0, 0)
np.show()
display.show(Image.HAPPY)

while True():
    if button_a.is_pressed():
        np[0] = (255, 0, 0)
        np[1] = (255, 0, 0)
        np[2] = (255, 0, 0)
        np[3] = (255, 0, 0)
        display.clear()
        display.show(loopcounter)
        np[loopcounter] = (0, 0, 0)
        np.show()
        sleep(500)
# loopcounter
while loopcounter >= 0:
    display.show(loopcounter)
    sleep(1000)
    np[loopcounter] = (0, 0, 0)
    np.show()
    loopcounter = loopcounter - 1
