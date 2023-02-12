function password ( input ) {
    let index = 0

    let name = input[index]
    index++

    let realPass = input[index]
    index++

    let temPassword = input[index]
    index++

    while ( temPassword !== realPass ) {
        temPassword = input[index]
        index++
    }

    console.log(`Welcome ${name}!`)
}