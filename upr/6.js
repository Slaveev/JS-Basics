function repaint(input) {
    let safetyBag = Number(input[0])
    let paint = Number(input[1])
    let paintWash = Number(input[2])
    let bag = 0.4
    let workHours = Number(input[3])

    let safetyBagPrice = (safetyBag + 2) * 1.5
    let paintPrice = (paint + (paint * 0.1) ) * 14.5
    let paintWashPrice = paintWash * 5

    let price = (safetyBagPrice + paintPrice + paintWashPrice + bag)
    let workPay = (price * 0.30) * workHours

    let fullPrice = price + workPay
    
    console.log(fullPrice)
}