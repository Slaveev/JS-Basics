function guessPassword(input) {
    let realP = "s3cr3t!P@ssw0rd"
    let guessP = input[0];

    if (guessP === realP) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}