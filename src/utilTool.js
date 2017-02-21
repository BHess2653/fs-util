const colors = require('colors');

class console {
  log(data) {
    this.data = data;
    process.stdout.write(`${this.data}\n`);
  }
  error(data) {
    this.data = data;
    process.stderr.write(`${this.data}\n`);
  }
  warn(data) {
    this.data = data;
    process.stderr.write(`${this.data}\n`);
  }
}
module.exports = {
  msg(msg, type) {
    this.msg = msg;
    this.type = type;
    this.time = new Date();
    this.border = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
    const con = new console();
    if (this.type === 'log') {
      con.log(`${this.border}~~~~~~~~ ${this.type.toUpperCase()} Event ~~~~~~~~\n${this.msg}\n${this.time}`.green);
    } else if (this.type === 'warn') {
      this.type = 'Warning';
      con.warn(`${this.border}~~~~~~~~ ${this.type.toUpperCase()} Event ~~~~~~~~\n${this.msg}\n${this.time}`.yellow);
    } else if (this.type === 'error') {
      con.error(`${this.border}~~~~~~~~ ${this.type.toUpperCase()} Event ~~~~~~~~\n${this.msg}\n${this.time}`.red);
    }
  },
};
