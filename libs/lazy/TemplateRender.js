class TemplateRender {
    constructor(config) {
        const fs = require('fs');   
        const mustache = require('mustache');
        let workingFolder = process.cwd();
        let templateFolder = config["templateDir"];
        let templateFile = config["templateFile"];

        const template = fs.readFileSync(workingFolder+"/"+templateFolder+"/"+templateFile, 'utf8');    
        this.output = mustache.render(template);
    }

    clearTemplate(){
        this.output = "";
    }
    
    renderMainTemplate(){
        return this.output;
    }
}

module.exports = TemplateRender;
module.exports = (config) => { return new TemplateRender(config) }