let 変数 = 0
basic.showIcon(IconNames.Target)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.ShowString("Program 50", 0, 0)
basic.pause(2000)
basic.forever(function () {
    変数 = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(変数)
    I2C_LCD1602.ShowString("distance", 5, 0)
    I2C_LCD1602.ShowString("" + convertToText(変数) + "cm", 4, 1)
    basic.pause(200)
    I2C_LCD1602.clear()
    basic.clearScreen()
})
