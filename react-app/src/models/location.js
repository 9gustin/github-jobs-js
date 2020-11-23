export default class Location {
    name;
    selected;

    constructor(config){
        if(config){
            this.name = config.name;
            this.selected = config.selected;
        }
    }
}