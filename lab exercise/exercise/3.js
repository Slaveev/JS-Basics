function time15(input) {
    let startHour = Number(input.shift(0))
    let startMin = Number(input.shift(1))

    let timeInMin = startHour * 60 + startMin
    
    let timePlus15 = timeInMin + 15;

    let finalHour = parseInt(timePlus15 / 60);
    let finalMin = timePlus15 % 60;

    if (finalHour >= 24) {
        finalHour -= 24;
    }

    if (finalMin < 10) {
        console.log(`${finalHour}:0${finalMin}`);
    } else {
        console.log(`${finalHour}:${finalMin}`)
    }
}