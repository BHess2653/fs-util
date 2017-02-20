const colors = require('colors');

const debug = {
  msg(msg, type) {
    this.msg = msg;
    this.type = type;
    return this.output(this.msg, this.type);
  },
  output(msg, type) {
    this.msg = msg;
    this.type = type;
    this.time = new Date();
    this.border = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';

    switch (this.type) {
      case 'log' :
        return console.log(`${this.border}${this.msg}\n${this.time}` .green);
      case 'warn' :
        return console.warn(`${this.border}${this.msg}\n${this.time}` .yellow);
      case 'error' :
        return console.error(`${this.border}${this.msg}\n${this.time}` .red);
      default :
        return 'Invalid message type';
    }
  },
};

exports.con = debug;
