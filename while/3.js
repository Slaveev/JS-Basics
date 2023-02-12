function sumOfNumbers ( input ) {
    let startNumber = Number(input[0])

    let index = 1
    let nums = Number(input[index])
    index++

    while ( startNumber >= nums ) {
        nums = nums + nums

        index++
        

    }
    console.log(startNumber)
    console.log(nums)
}

sumOfNumbers(["100", "10", "20", "30", "40"])