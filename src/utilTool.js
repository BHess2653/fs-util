const colors = require('colors');

module.exports = {
  msg(m, t) {
    const msg = m;
    let type = t;
    const time = new Date();
    const border = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
    if (type === 'log') {
      console.log(`${border}~~~~~~~~ ${type.toUpperCase()} Event ~~~~~~~~\n${msg}\n${time}`.green);
    } else if (type === 'warn') {
      type = 'Warning';
      console.warn(`${border}~~~~~~~~ ${type.toUpperCase()} Event ~~~~~~~~\n${msg}\n${time}`.yellow);
    } else if (type === 'error') {
      console.error(`${border}~~~~~~~~ ${type.toUpperCase()} Event ~~~~~~~~\n${msg}\n${time}`.red);
    }
  },
};
