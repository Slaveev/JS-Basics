function movieTax(input) {
    let movieBudget = Number(input[0])
    let people = Number(input[1])
    let dressForPeople = Number(input[2])

    let decor = movieBudget * 0.1

    let priceForDress = people * dressForPeople

    let moviePrice = decor + priceForDress

    let discount = 0
    if ( people > 150 ) {
        discount = priceForDress * 0.1 
        let priceWdiscount = priceForDress - discount

        moviePrice = decor + priceWdiscount
    }

    let moneyLeft = movieBudget - moviePrice;

    if ( movieBudget >= moviePrice ) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(moneyLeft).toFixed(2)} leva left.`);
    } else if ( movieBudget < moviePrice) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(moviePrice - movieBudget).toFixed(2)} leva more.`);
    }


}