def on_forever():
    basic.show_string("JJTH Mixed Info")
basic.forever(on_forever)

def on_forever2():
    Tinybit.RGB_Car_Big(Tinybit.enColor.GREEN)
basic.forever(on_forever2)

def on_forever3():
    if Tinybit.Line_Sensor(Tinybit.enPos.LEFT_STATE, Tinybit.enLineState.WHITE) and Tinybit.Line_Sensor(Tinybit.enPos.LEFT_STATE, Tinybit.enLineState.WHITE):
        pass
basic.forever(on_forever3)
