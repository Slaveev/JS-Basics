function deliveryFood(input) {
    let chickenMenu = Number(input[0]) * 10.35
    let fishMenu = Number(input[1]) * 12.40
    let vegMenu = Number(input[2]) * 8.15

    let menuPrice = chickenMenu + fishMenu + vegMenu
    // desert = 20% ot cqlata cena bez dostavkata
    let desert = menuPrice * 0.2

    let delivery = 2.5

    let fullPrice = menuPrice + desert + delivery

    console.log(fullPrice)
}