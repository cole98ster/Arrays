const helloWorld = require('C:\Users\colen\Downloads\Coding\Intro_Odin_Project-main\Arrays\Hello_01\helloworld.js');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});