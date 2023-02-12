function vowelsCount ( input ) {
    let text = input[0]
    let vowels = 0

    for ( let i = 0; i < text.length; i++ ) {
        switch ( text.charAt(i) ) {
            case 'a': vowels += 1; break;
            case 'e': vowels += 2; break;
            case 'i': vowels += 3; break;
            case 'o': vowels += 4; break;
            case 'u': vowels += 5; break;
        }
    }
    console.log(vowels)
}
vowelsCount(['Ariwemaina'])