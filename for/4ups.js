function birthdayLily ( input ) {
    let age = Number(input[0])
    let washingMachineCost = Number(input[1])
    let pricePerToy = Number(input[2])

    let totalMoneyEarned = 0
    let birthdayMoneyGiven = 10

    for ( i = 1; i <= age; i++ ) {
        if ( i % 2 === 0 ) {
            totalMoneyEarned += birthdayMoneyGiven
            totalMoneyEarned -= 1
            birthdayMoneyGiven += 10
        } else {
            totalMoneyEarned += pricePerToy
        }
    }

    if ( totalMoneyEarned >= washingMachineCost ) {
        console.log(`Yes! ${(totalMoneyEarned - washingMachineCost).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachineCost - totalMoneyEarned).toFixed(2)}`)
    }
}