function cinemaTickets (input) {
    let index = 0
    let command = input[index]
    index++

    let studentTickets = 0
    let standardTickets = 0
    let kidTickets = 0

    while (command !== 'Finish') {
        let movieTitle = command

        let freeSpace = Number(input[index])
        index++

        let command1 = input[index]
        index++

        let spacesTaken = 0

        while (command1 !== 'End') {
            let ticketType = command1

            if (ticketType === 'standard') {
                standardTickets++
            } else if (ticketType === 'student') {
                studentTickets++
            } else {
                kidTickets++
            }

            spacesTaken++

            if (spacesTaken === freeSpace) {
                break
            }

            command1 = input[index]
            index++
        }

        let precentfull = (spacesTaken / freeSpace) * 100
        console.log(`${movieTitle} - ${precentfull.toFixed(2)}% full.`)

        command = input[index]
        index++
    }

    let totalTickets = studentTickets + standardTickets + kidTickets
    console.log(`Total tickets: ${totalTickets}`)

    let studentPercent = (studentTickets / totalTickets) * 100
    let standardPercent = (standardTickets / totalTickets) * 100
    let kidPercent = (kidTickets / totalTickets) * 100
    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
}