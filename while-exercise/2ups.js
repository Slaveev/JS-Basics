function examPrep ( input ) {
    let index = 0

    let maxPoorGrades = Number(input[index])
    index++

    let command = input[index]
    index++

    let grade = Number(input[index])
    index++

    let badGrades = 0
    let gradesCounter = 0
    let gradesSum = 0
    let lastProblem = ''

    while ( command !== 'Enough' ) {
        lastProblem = command
        if ( grade <= 4 ) {
            badGrades++
        }

        if ( badGrades === maxPoorGrades ) {
            console.log(`You need a break, ${badGrades} poor grades.`)
            break
        }
        gradesCounter++
        gradesSum += grade

        command = input[index]
        index++

        grade = Number(input[index])
        index++
    }

    let avgGrade = gradesSum / gradesCounter
    console.log(`Average score: ${(avgGrade).toFixed(2)}`)
    console.log(`Number of problems ${gradesCounter}`)
    console.log(`Last problem: ${lastProblem}`)
}