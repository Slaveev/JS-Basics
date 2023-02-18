function projectGrades (input) {
    let index = 0;

    let gradesCount = Number(input[index]);
    index++;

    let command = input[index]
    index++;
    
    let totalGradesSum = 0
    let presentationCount = 0

    while (command !== 'Finish') {
        let presentationName = command
        let gradesSum = 0

        for (let currGrade = 1; currGrade <= gradesCount; currGrade++){ 
            let grade = Number(input[index])
            index++;

            gradesSum += grade
        }

        let avgGrade = gradesSum / gradesCount

        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);

        totalGradesSum += avgGrade
        presentationCount++

        command = input[index]
        index++
    }
    let totalAvgPre = totalGradesSum / presentationCount
    console.log(`Student's final assessment is ${totalAvgPre.toFixed(2)}.`)
}
(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"])