class Lazy{

  constructor(config) {
    for (const prop in config) {
      this[prop] = config[prop];
    }
    this.Router = require('./Router')(this.serverConfig);
    this.Loader = require('./Loader')(this.appConfig);
    this.Contents = require('./Contents');
  }

  start(config) {
    this.Router.start();
  }

  request(req){
    this.Loader.data(req);
  }

}

module.exports = (config) => { return new Lazy(config); };