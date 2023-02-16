class Lazy{
  constructor(config) {
    const { serverConfig, appConfig, templateConfig, dbConfig } = config;
    this.Router = require('./Router')(serverConfig);
    this.Loader = require('./Loader')(appConfig);
  }

  start(config) {
    this.Router.start();
  }

  request(req){
    this.Loader.data(req);
  }
}

module.exports = (config) => { return new Lazy(config); };