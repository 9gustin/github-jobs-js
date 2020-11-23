export default class ILocation {
    name:string = '';
    // selected:boolean = false;

    constructor(config:any){
        if(config){
            this.name = config.name;
            // this.selected = config.selected;
        }
    }
}