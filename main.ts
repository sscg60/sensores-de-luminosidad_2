basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    if (input.lightLevel() <= 100) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
