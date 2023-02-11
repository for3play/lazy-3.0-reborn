class BaseApp {

    constructor(config) {
      this.config = config;
      this.http = require('http');
      this.template = require('./TemplateRender')(this.config['templateConfig']);
      this.contents = require('./Contents');
      this.port = config["settings"]["port"];
      this.url = "";
      this.start();
    }
  
    start() {
        this.http.createServer((req, res)=>{

          //this.url = req.url;
          res.write(this.template.renderMainTemplate());

          res.end();
        }).listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
        
    };

    test() {
      console.log('test');
    }
   
}

module.exports = BaseApp;
module.exports = (config) => { return new BaseApp(config) }
