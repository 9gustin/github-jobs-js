export default class Location {
    #name;
    constructor(config){
        if(config){
            this.#name = config.name;
        }
    }

    get name(){
        return this.#name;
    }
}