const colors = require('colors');

const debug = {
  msg(msg, type) {
    this.msg = msg;
    this.type = type;
    this.colors = {
      log: 'green',
      warn: 'yellow',
      error: 'red',
    };
    switch (type) {
      case 'log' :
        this.outColor = this.colors.log;
        this.style = this.type;
        this.msg = this.msg;
        break;
      case 'warn' :
        this.outColor = this.colors.warn;
        this.style = this.type;
        this.msg = this.msg;
        break;
      case 'error' :
        this.outColor = this.colors.error;
        this.style = this.type;
        this.msg = this.msg;
        break;
      default :
        return 'Invalid message type';
    }
    return this.output(this.msg, this.outColor, this.type);
  },
  output(msg, color, type) {
    this.msg = msg;
    this.color = color;
    this.type = type;
    if (true) {
      console.log(`${msg}` + '.' + color);
    }
  },
};

exports.con = debug;

exports.debug = (title, obj) => {
  const colors = require('colors');
  const fs = require('fs');

  const border = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
  const time = new Date();
  colors.setTheme({
    create: 'green',
    read: 'yellow',
    update: 'magenta',
    delete: 'red',
    error: 'red',
  });
  const output = border + title + JSON.stringify(obj) + '\n' + time + border;

  if (true) {
    console.log(output);
  }
};
