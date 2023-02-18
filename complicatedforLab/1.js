function pyramids(input) {
    let endNumber = Number(input[0])

    let current = 1
    let isBigger = false
    let printCurrentline = ''

    for (let rows = 1; rows <= endNumber; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > endNumber) {
                isBigger = true
                break;
            }
            printCurrentline += current + ' ';
            current++;
        }
        console.log(printCurrentline);
        printCurrentline = "";
        if (isBigger) {
            break
        }
    }
}
pyramids(['7'])