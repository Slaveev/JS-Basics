function raceSecs(input) {
    let racer1 = Number(input[0])
    let racer2 = Number(input[1])
    let racer3 = Number(input[2])

    let totalTime = racer1 + racer2 + racer3;

    let totalMinutes = Math.floor(totalTime / 60);
    let time = totalTime % 60;

    if ( time < 10 ) {
        console.log(totalMinutes + ":0" + time)
    } else {
        console.log(totalMinutes + ":" + time)
    }
}