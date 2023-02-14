function combinations ( input ) {
    let combNumber = Number(input[0])
    let combinationCounter = 0

    for ( let num1 = 0; num1 <= combNumber; num1++ ) {
        for ( let num2 = 0; num2 <= combNumber; num2++ ) {
            for ( let num3 = 0; num3 <= combNumber; num3++ ) {
                if ( num1 + num2 + num3 === combNumber) {
                    combinationCounter++
                }
            }
        }
    }
    console.log(combinationCounter)
}
combinations(['25'])