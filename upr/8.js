function basketTraining(input) {
    let yearlyTax = Number(input[0])

    let basketBoots = yearlyTax - (yearlyTax * 0.4)
    let basketUniform = basketBoots - (basketBoots * 0.2)
    let ball = basketUniform / 4
    let basketAcces = ball / 5

    let fullPrice = yearlyTax + basketBoots + basketUniform + ball + basketAcces

    console.log(fullPrice)
}