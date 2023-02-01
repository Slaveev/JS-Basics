function petFood(input) {
    let dogFood = 2.5;
    let catFood = 4;
    
    let amount = (Number(input[0]) * dogFood) + (Number(input[1]) * catFood)
    console.log(`${amount} lv.`)
}