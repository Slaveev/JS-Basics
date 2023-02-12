function birthdaysCount ( input ) {
    let birthdays = Number(input[0])
    let toys = 0
    let money = 0
    let laundryPrice = Number(input[1])
    let toysPrice = Number(input[2])

    for ( let i = 1; i <= birthdays; i++ ) {
        if ( i % 2 === 0 ) {
            money += 9
        } else {
            toys += 1
        }
    }
    let toysSell = toys * toysPrice
    let savedMoney = money + toysSell

    if ( savedMoney >= laundryPrice ) {
        console.log(`Yes! ${savedMoney - laundryPrice.toFixed(2)}`)
    } else {
        console.log(`No! ${laundryPrice - savedMoney.toFixed(2)}`)
    }
}
birthdaysCount(['10', '170', '6'])