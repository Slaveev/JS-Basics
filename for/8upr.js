function tennisRank( input ) {
    let tournamentCount = Number(input[0])
    let startingPoints = Number(input[1])

    let tournamentsWon = 0
    let pointsWon = 0

    for ( let i = 2; i < input.length; i++ ) {
        let tournamentStatus = input[i]

        if ( tournamentStatus === 'W' ) {
            pointsWon += 2000
            tournamentsWon++
        } else if ( tournamentStatus === 'F' ) {
            pointsWon += 1200
        } else {
            pointsWon += 720
        }
    }

    let finalPoints = startingPoints + pointsWon
    console.log(`Final points: ${finalPoints}`)

    let avgPoints = Math.floor(pointsWon / tournamentCount)
    console.log(`Average points: ${avgPoints}`)

    let tournamentsWonPercent = (tournamentsWon / tournamentCount) * 100
    console.log(`${tournamentsWonPercent.toFixed(2)}%`)
}
tennisRank(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])