class BaseApp {

  mainTemplate = '';
    constructor(config) {
      this.config = config;
      this.http = require('http');
      require('./TemplateRender');
      const template = global.TemplateRender;
      this.mainTemplate = new template(config['templateConfig'])
      this.port = config['settings']['port'];
      this.url = "";
      this.contents = require('./Contents');
      this.start();   
    }
  
    start() {
       
        this.http.createServer((req, res)=>{

          //this.url = req.url;

          res.write(this.mainTemplate.renderTemplate());

          res.end();
        }).listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
        
    };

    test() {
      return 'adsfasdfsdf';
    }
   
}

global.BaseApp = BaseApp;
module.exports = (config) => { return new BaseApp(config) };


