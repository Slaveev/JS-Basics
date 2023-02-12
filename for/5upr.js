function SalaryCheck ( input ) {
    let tabs = Number(input[0])
    let salary = Number(input[1])

    let sanctury = 0

    for ( let i = 2; i < input.length; i++ ) {
        let openedTabs = input[i]

        if ( openedTabs === 'Facebook' ) {
            sanctury += 150
        } else if ( openedTabs === 'Instagram' ) {
            sanctury += 100
        } else if ( openedTabs === 'Reddit') {
            sanctury += 50
        }
    }
        let salaryLeft = salary - sanctury

        if ( salaryLeft <= 0 ) {
            console.log(`You have lost your salary.`)
        } else {
            console.log(salaryLeft)
        }
}
SalaryCheck([3, 
    '500',
    'Facebook',
    'Stackoverflow.com',
    'softuni.bg'
])