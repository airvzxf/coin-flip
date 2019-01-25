const getBinaryZeroFilled = require('./getBinaryZeroFilled');

test('binary number filled zero to digits.', () => {
    expect(getBinaryZeroFilled("101", 7)).toBe("0000101");
});

test('binary number is not filled because is the same size.', () => {
    let number = "1101";
    expect(getBinaryZeroFilled(number, number.length)).toBe(number);
});

test('when the number is empty.', () => {
    expect(getBinaryZeroFilled("", 5)).toBe("00000");
});

test('when the number is NaN it throws an error.', () => {
    expect(() => {
        getBinaryZeroFilled(NaN, 5);
    }).toThrow();
});

test('when the number is undefined it throws an error.', () => {
    expect(() => {
        getBinaryZeroFilled(undefined, 1);
    }).toThrow();
});
