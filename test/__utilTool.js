const con = require('../src/utilTool');
describe('Util Tool DEBUG', () => {
  it('Should write to file', () => {})
});

const messages = ['warn', 'log', 'error'];
messages.forEach((type) => {
  describe('Tests the console messages', () => {
    it('Tests the message type ' + type, () => {
      con.msg('hello world', type);
    });
  });
});
