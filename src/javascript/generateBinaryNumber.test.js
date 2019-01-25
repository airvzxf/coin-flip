const generateBinaryNumber = require('./generateBinaryNumber');

// TODO: Needs to mock the local function which is flip.
test('when the flip is true it returns 1.', () => {

    expect(generateBinaryNumber()).toBe(1);
});
