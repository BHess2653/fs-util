const colors = require('colors');
require('dotenv').config;

module.exports = {
  msg(m, t) {
    const msg = m;
    let type = t;
    const time = new Date();
    const border = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
    if (type === 'log' && process.env.DEBUG) {
      console.log(`${border}~~~~~~~~ ${type.toUpperCase()} Event ~~~~~~~~\n${msg}\n${time}`.green);
    } else if (type === 'warn' && process.env.DEBUG) {
      type = 'Warning';
      console.warn(`${border}~~~~~~~~ ${type.toUpperCase()} Event ~~~~~~~~\n${msg}\n${time}`.yellow);
    } else if (type === 'error' && process.env.DEBUG) {
      console.error(`${border}~~~~~~~~ ${type.toUpperCase()} Event ~~~~~~~~\n${msg}\n${time}`.red);
    }
  },
};
