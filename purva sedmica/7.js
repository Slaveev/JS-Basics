function work(input) {
    let person = input[0];
    let project = Number(input[1]);
    let time = project * Number("3");
    console.log(`The architect ${person} will need ${time} hours to complete ${project} project/s.`)
}