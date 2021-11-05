import { add, minus, multiply, divide } from '../math-utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('add() should take in 2 and 2 and return 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(2, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('minus() should take in 3 and 1 and return 2', (expect) => {

    const expected = 2;
    const actual = minus(3, 1);
    expect.equal(actual, expected);
});

test('multiply() should take in 2 and 5 and return 10', (expect) => {

    const expected = 10;
    const actual = multiply(2, 5);
    expect.equal(actual, expected);
});

test('divide() should take in 6 and 2 and return 3', (expect) => {

    const expected = 3;
    const actual = divide(6, 2);
    expect.equal(actual, expected);
});
