function kidShop(input) {
    let vacantion = Number(input[0])
    let puzzel = Number(input[1]) 
    let doll = Number(input[2]) 
    let bear = Number(input[3])
    let minion = Number(input[4])
    let truck = Number(input[5])

    let sumOfToys = ((puzzel * 2.6) + (doll * 3) + (bear * 4.1) + (minion * 8.2) + (truck * 2));
    
    let allToys = puzzel + doll + bear + minion + truck
    
    let discount = 0
    if ( allToys >= 50 ) {
        discount = sumOfToys * 0.25
    }
    
    let priceWithDisc = sumOfToys - discount;

    let rent = priceWithDisc * 0.1
    
    let winnings = priceWithDisc - rent

    if ( winnings >= vacantion ) {
        let ifEnough = winnings - vacantion;
        console.log(`Yes! ${ifEnough.toFixed(2)} lv left.`)
    } else {
        let ifEnough = vacantion - winnings 
        console.log(`Not enough money! ${ifEnough.toFixed(2)} lv needed.`)
    }
} 