function greenYard(input) {
    let a = Number(input[0]);
    let price = a * 7.61;
    let discount = price * 0.18;
    let fullPrice = price - discount ;


    console.log(`The final price is: ${fullPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}