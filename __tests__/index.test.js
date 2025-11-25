// index.test.js
const { test } = require('./index');

describe('test function', () => {
  it('should log "Hello world"', () => {
    console.log = jest.fn(); // Mock console.log

    test();

    expect(console.log).toHaveBeenCalledWith("Hello world");
  });
});