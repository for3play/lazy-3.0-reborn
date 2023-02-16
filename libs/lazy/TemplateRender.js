class TemplateRender {
    constructor(config) {
        const fs = require('fs');   
        const mustache = require('mustache');
        let workingFolder = process.cwd().replace(/\\/g, '/');
        let templateFolder = config['templateDir'];
        let templateFile = config['templateFile'];
        let publicFolder = config['publicFolder'];
        this.template = '';
        const openTemplate = fs.readFileSync(workingFolder + '/' + publicFolder + '/' + templateFolder + '/' + templateFile, 'utf8');    
        this.template = mustache.render(openTemplate);
        this.testValue = '1';
    }

    clearTemplate(){
        this.template = '';
        return this.testValue;
    }
    
    renderTemplate(){
        this.testValue = '45';
        return this.template;
    }
}

/*
module.exports = (config) => { return new TemplateRender(config) }
*/
global.TemplateRender = TemplateRender;

