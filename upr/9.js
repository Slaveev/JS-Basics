function aquariumCapacity(input) {
    let lenght = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percent = Number(input[3])

    let fullCapacity = lenght * width * height
    let capacityL = fullCapacity * 0.001
    let takenSpace = percent / 100

    let requiredL = capacityL * (1 - takenSpace)

    console.log(requiredL)
}