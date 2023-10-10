let stepCount = 0
input.onGesture(Gesture.Shake, function () {
    stepCount = stepCount + 1
})
input.onButtonPressed(Button.A, function () {
    stepCount = 0
    basic.showNumber(stepCount)
})
loops.everyInterval(2000, function () {
    basic.showNumber(stepCount)
})
