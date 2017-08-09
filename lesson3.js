// data manipolation

// data input

// none

// functions

function getRandomChar() {
    // ES6
    const alphabet = ["a", "b", "c", "d"];
    let i = Math.floor(Math.random() * alphabet.length);

    i = 1;
    return alphabet[i];
}

var t = getRandomChar();
console.log(t);


// data output

// random letter fromt he alphabet