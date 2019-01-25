function flip() {
    return Math.random() >= 0.5;
}

function randomNumber(n) {
    console.log("flip: ", flip());

    // Returns a number between [0, n)
}

randomNumber(500) // returns 123
randomNumber(1) // returns 0
randomNumber(500) // returns 466
randomNumber(1000001) // throw error
