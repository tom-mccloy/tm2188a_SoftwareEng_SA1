// Importing the postcode checker
const possiblePostcode = require('./index.js');

// Test 1: Smoke test on boolean
test('Smoke test - Is the testing library working?', () => {
    
    // Values to check
    let num1 = 1 + 1;
    let num2 = 2;

    // Expected value
    let expected = true;

    // Performing the test
    expect(num1 == num2).toBe(expected);
})

// Testing suite
describe('possiblePostcode testing... - Whitespace / null', () => {

    // Test 1: Invalid null strings / whitesapce
    let invalidNull = "";
    let invalidWhitespace = "       ";

    // Expected to be deemed as false postcodes
    let expected = false;

    // Performing the tests
    expect(possiblePostcode(invalidNull)).toBe(expected);
    expect(possiblePostcode(invalidWhitespace)).toBe(expected);

});
// Too short postcodes
describe('possiblePostcode testing... - Too short', () => {

    // Test 2: IToo short
    let pc1 = 'SA28D';
    let pc2 = 'S28H';
    let pc3 = 'SA 8D';
    let pc4 = 'SA2 DH';
    let pc5 = 'SA2 8D';

    // Expected to be deemed as false postcodes
    let expected = false;

    // Performing the tests
    expect(possiblePostcode(pc1)).toBe(expected);
    expect(possiblePostcode(pc2)).toBe(expected);
    expect(possiblePostcode(pc3)).toBe(expected);
    expect(possiblePostcode(pc4)).toBe(expected);
    expect(possiblePostcode(pc5)).toBe(expected);

});
// Too long postcodes
describe('possiblePostcode testing... - Too long', () => {

    // Test 3: Too many characters
    let pc1 = 'SHA28DH';
    let pc2 = 'SA245 8DH';
    let pc3 = 'SA2 84D';
    let pc4 = 'SA2 8DHH';
    let pc5 = 'SA2 88D';

    // Expected to be deemed as false postcodes
    let expected = false;

    // Performing the tests
    expect(possiblePostcode(pc1)).toBe(expected);
    expect(possiblePostcode(pc2)).toBe(expected);
    expect(possiblePostcode(pc3)).toBe(expected);
    expect(possiblePostcode(pc4)).toBe(expected);
    expect(possiblePostcode(pc5)).toBe(expected);

});
// Valid postcodes
describe('possiblePostcode testing... - Valid', () => {

    // Test 4: Valid postocdes
    let pc1 = 'SA2 8DH';
    let pc2 = 'CF10 3NB';
    let pc3 = 'BS1 3BD';
    let pc4 = 'E1 1LP';
    let pc5 = 'W1 3BS';

    // Expected to be deemed as valid postcodes
    let expected = true;

    // Performing the tests
    expect(possiblePostcode(pc1)).toBe(expected);
    expect(possiblePostcode(pc2)).toBe(expected);
    expect(possiblePostcode(pc3)).toBe(expected);
    expect(possiblePostcode(pc4)).toBe(expected);
    expect(possiblePostcode(pc5)).toBe(expected);

});