function tableMath( input ) {
    let num = Number(input[0])
    for ( let i = 1; i <= 10; ++i ) {
        sum = i * num
        console.log(`${i} * ${num} = ${sum}`)
    }
}
tableMath(['5'])