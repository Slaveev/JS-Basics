function figures(input) {
    let figure = input[0];
    let side1 = Number(input[1]);
    let side2 = Number(input[2]);

    let square = side1 ** 2;
    let rectangle = side1 * side2;
    let circle = Math.PI * (side1**2);
    let triangle = (side1 * side2) / 2;


    if ( figure === "square") {
        console.log(square.toFixed(3));
    } else if ( figure === "rectangle") {
        console.log(rectangle.toFixed(3));
    } else if ( figure === "circle") {
        console.log(circle.toFixed(3));
    } else if ( figure === "triangle") {
        console.log(triangle.toFixed(3));
    }
}