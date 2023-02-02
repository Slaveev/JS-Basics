function numberGet(input) {
    let myNum = Number(input[0]);

    if (myNum < 100 ) {
        console.log("Less than 100");
    } else if ( myNum >= 100 && myNum <= 200 ) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    };
}