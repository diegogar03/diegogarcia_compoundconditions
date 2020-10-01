let farenheit = 0
let celsius = 0
input.onButtonPressed(Button.A, function () {
    if (farenheit >= -22 && farenheit <= 14) {
        basic.showString("Stay at home, there is heavy snow")
        basic.showIcon(IconNames.No)
    } else if (farenheit >= 15 && farenheit <= 23) {
        basic.showString("Go for your skis and have fun!")
        basic.showIcon(IconNames.Yes)
    } else if (farenheit >= 24 && farenheit <= 32) {
        basic.showString("Warning! you can only ski in the highest parts")
        basic.showIcon(IconNames.Skull)
    } else if (farenheit >= 33) {
        basic.showString("Sorry, it is not ski season")
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    celsius = input.temperature()
    farenheit = celsius * 1.8 + 32
})
