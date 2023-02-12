function schoolGraduate ( input ) {
    let index = 0
    let name = input[index]
    index++

    let grade = Number(input[index])
    index++
    let i = 1
    let sumGrade = 0

    let badGradeCounter = 0
    let isExcluded = false
    while ( grade <= 12 ) {
        if ( grade < 4.00 ) {
            badGradeCounter++
            if ( badGradeCounter == 2 ) {
                isExcluded
                break;
            }
            grade = Number(input[index])
            index++
            continue
        }
        i++
        sumGrade += grade
        grade = Number(input[index])
    }

    if ( isExcluded ) {
        console.log(`${name} has been excluded at ${i} grade`)
    } else {
        console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`)
    }
}