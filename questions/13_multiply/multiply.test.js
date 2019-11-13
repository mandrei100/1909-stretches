const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('2')).toThrow();

    expect(() => multiply('false').toThrow());
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(multiply(2,1)).toBe(typeof 'number');
    // expect(typeof num1 !== 'number' || typeof num2 !== 'number').toBe('mo math mo problems');

    // test that the returned value is correct
    expect(8,6).toBe(48);

    // test some other values
    expect(2,2).toBe(4);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);
    expect(multiply()).toBe();
  });
});
