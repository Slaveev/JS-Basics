function timeSeries(input) {
    let series = input[0];
    let seriesLenght = Number(input[1])
    let brakeTime = Number(input[2])

    let launchBrake = brakeTime / 8
    let restTime = brakeTime / 4

    let leftTime = brakeTime - launchBrake - restTime

    if ( leftTime >= seriesLenght ) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(leftTime - seriesLenght)} minutes free time.`)
    } else { 
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(seriesLenght - leftTime)} more minutes.`)
    }
}