function readBooks(input) {
    let numberPages = Number(input[0]);
    let pagesToRead = Number(input[1]);
    let days = Number(input[2]);

    let dayRead = numberPages / pagesToRead
    let requiredHours = dayRead / days

    console.log(requiredHours);
}