const flip = require('./flip');

const mockMath = Object.create(global.Math);

test('it returns true when the value is grater than 50% using in the Math library.', () => {
    mockMath.random = () => 0.8;
    global.Math = mockMath;

    expect(flip()).toBeTruthy();
});

test('it returns false when the value is less than 50% using in the Math library.', () => {
    mockMath.random = () => 0.2;
    global.Math = mockMath;

    expect(flip()).toBeFalsy();
});

test('it returns false when the value is equal to 50% using in the Math library.', () => {
    mockMath.random = () => 0.5;
    global.Math = mockMath;

    expect(flip()).toBeTruthy();
});

test('it returns false when the value is 49% using in the Math library.', () => {
    mockMath.random = () => 0.499999;
    global.Math = mockMath;

    expect(flip()).toBeFalsy();
});
