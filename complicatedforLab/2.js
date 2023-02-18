function equalSumEvenOddPosition(input) {
    let startNum = Number(input[0])
    let endNumb = Number(input[1])
    let result = ''

    for ( let currNum = startNum; currNum <= endNumb; currNum++ ) {
        let oddSum = 0
        let evenSum = 0

        let currNumStr = currNum.toString();

        for ( let index = 0; index < currNumStr.length; index++ ) {
            let currDigit = Number(currNumStr[index])

            let position = index + 1

            if ( position % 2 === 0 ) {
                evenSum += currDigit
            } else {
                oddSum += currDigit
            }
        }

        if ( oddSum === evenSum ) {
            result += currNumStr + ' '
        }
    }

    console.log(result)
}
equalSumEvenOddPosition(['100000', '100050'])