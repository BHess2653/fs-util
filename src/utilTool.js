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
  msg(m, t) {
    const msg = m;
    let type = t;
    const time = new Date();
    const border = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
    const con = new console();
    if (type === 'log') {
      con.log(`${border}~~~~~~~~ ${type.toUpperCase()} Event ~~~~~~~~\n${msg}\n${time}`.green);
    } else if (type === 'warn') {
      type = 'Warning';
      con.warn(`${border}~~~~~~~~ ${type.toUpperCase()} Event ~~~~~~~~\n${msg}\n${time}`.yellow);
    } else if (type === 'error') {
      con.error(`${border}~~~~~~~~ ${type.toUpperCase()} Event ~~~~~~~~\n${msg}\n${time}`.red);
    }
  },
};
