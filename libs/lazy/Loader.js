
class Loader {

    constructor(config) {
        for (const prop in config) {
            this[prop] = config[prop];
        }
        console.log(this.publicFolder);
    }

    data(data) {
        const {url} = data;
        this.loadFile(url);
    }
    
    loadFile(url){
        console.log(url);
    }
}

module.exports = (config) => { return new Loader(config) }