
class Router {

    constructor(config) {   
      this.config = config;
    }

    start() {
      const http = require('http');
      http.createServer((req, res) => {

        if (req.url === '/favicon.ico') {
          res.writeHead(200, {'Content-Type': 'image/x-icon'} );
          res.end();
          return;
        }

        Lazy.request(req);
        let returData = 'ok';
        res.write(returData);
        
        res.end();
      
      }).listen(this.config['port'], () =>{
        console.log(`Listening on port: ${this.config['port']}`);
      });
    }

  }

  module.exports = (config) => { return new Router(config); }
  