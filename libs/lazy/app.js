class App {
  constructor(config) {
    this.config = config; 
  }

  start() {
    const BaseApp = require('./BaseApp')(this.config);
  }

}
module.exports = (config) => { return new App(config) }
