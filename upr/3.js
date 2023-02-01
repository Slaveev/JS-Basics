function lihvi(input) {
    let depositSum = Number(input[0]);
    let months = Number(input[1]);
    let percent = Number(input[2]);

    let intrest = depositSum * (percent / 100)
    let monthlyIntr = intrest / 12

    let finalSum = depositSum + months * monthlyIntr
    console.log(finalSum);
}