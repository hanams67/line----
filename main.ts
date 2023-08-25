let strip: neopixel.Strip = null
basic.forever(function () {
    basic.showString("Vihaan/Ishaan")
    strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGBW)
})
basic.forever(function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
})
basic.forever(function () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        for (let speed = 0; speed <= 80; speed++) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, speed)
        }
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 70)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 70)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
