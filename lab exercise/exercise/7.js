function shopping(input){

    let petarBudget = Number(input[0])
    let videoCardBought = Number(input[1])
    let gpuBought = Number(input[2])
    let ramBought = Number(input[3])
    
    let videoCard = 250 * videoCardBought
    let gpu = gpuBought * (videoCard * 0.35);
    let ram = (videoCard * 0.1) * ramBought;

    let price = videoCard + gpu + ram
    
    if ( videoCardBought > gpuBought ) {
        price -= (price * 0.15)
    }

    if ( petarBudget >= price ) {
        console.log(`You have ${(petarBudget - price).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(price - petarBudget).toFixed(2)} leva more!`)
    }
}