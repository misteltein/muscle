input.onButtonPressed(Button.AB, function () {
    回数 = 0
})
let 回数 = 0
回数 = 0
basic.forever(function () {
    if (50 < input.acceleration(Dimension.Z)) {
        回数 += 1
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    basic.showNumber(回数)
})
