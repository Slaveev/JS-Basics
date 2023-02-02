function swimmingRecord(input) {
    let recordInSec = Number(input[0])
    let recordMeters = Number(input[1])
    let swimMeter = Number(input[2])

    let fullSwimSec = recordMeters * swimMeter
    let lakeDelay = ( Math.floor(recordMeters / 15) )
    let timeWithDelay = lakeDelay * 12.5
    let time = (fullSwimSec + timeWithDelay)

    if ( recordInSec > time ) {
        console.log(`Yes, he succeeded! The new world record is ${(time).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${( time - recordInSec ).toFixed(2)} seconds slower.`)
    }
}