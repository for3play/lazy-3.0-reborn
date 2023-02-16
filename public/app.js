const config = require('./config.json');
global.Lazy = require('../libs/lazy/Lazy')(config);

Lazy.Router.test();

