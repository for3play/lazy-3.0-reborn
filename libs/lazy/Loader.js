class Loader {

    constructor(config) {
        for (const prop in config) {
            this[prop] = config[prop];
        }
        const workingDir = (process.cwd().replace(/\\/g, "/"));
    }

    data(data) {
        const {url} = data;
        this.loadFile(url);
    }
    
    loadFile(url){
        console.log(url);
        var filePath = `/${this.publicFolder}/contents${url}`;
        console.log(filePath);
    }
    
}

module.exports = (config) => { return new Loader(config) }