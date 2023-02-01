function schoolBuy(input) {
    let pen = 5.80
    let marker = 7.20
    let cleaning = 1.20

    let pricePen = Number(input[0] * pen)
    let priceMarker = Number(input[1] * marker)
    let cleaningPrice = Number(input[2] * cleaning)

    let fullPrice = (pricePen + priceMarker + cleaningPrice)

    let discount = Number(input[3] / 100)

    let priceDiscount = fullPrice - (fullPrice * discount)


    console.log(priceDiscount);
}