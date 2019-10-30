const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('2')).toThrow();

    expect(() => multiply('false').toThrow());
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(8*6).toBe(typeof number);

    // test that the returned value is correct
    expect(8*6).toBe(48);

    // test some other values
    expect(2*2).toBe(4);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    return Math.floor(Math.random());
  });
});
