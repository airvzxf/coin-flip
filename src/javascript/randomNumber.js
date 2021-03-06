function randomNumber(n) {
    if (n < 0 || n > 1000000) {
        throw new Error("The number should be between 0 and 1,000,000.");
    }

    let binary_number = (n >>> 0).toString(2);
    let new_binary_number = generateBinaryNumber();
    let max_binary_size = binary_number.length;
    let binary_digit;

    for (let count = 1; count < max_binary_size; count++) {
        binary_digit = generateBinaryNumber();
        new_binary_number = binary_digit.toString() + new_binary_number.toString();

        if (getBinaryZeroFilled(new_binary_number, max_binary_size) > getBinaryZeroFilled(binary_number, max_binary_size)) {
            new_binary_number = new_binary_number.slice(1);
            break;
        }
    }

    return parseInt(new_binary_number, 2);
}

// TODO: Uncomment to run the unit test.
// module.exports = randomNumber;
