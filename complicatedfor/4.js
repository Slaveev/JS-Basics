function solve ( input ) {
    let start = Number(input[0])
    let end = Number(input[1])
    let magicNumber = Number(input[2])
    let counter = 0
    let isFinish = false

    for ( let i = start; i <= end; i++ ) {
        for ( let x = start; x <= end; x++ ) {
            counter++
            if ( x + i === magicNumber ) {
                isFinish = true
                console.log(`Combination N:${counter} (${i} + ${x} = ${magicNumber})`)
                break;
            }
        }
        if ( isFinish ) {
            break;
        }
    }
    if ( !isFinish ) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
}
