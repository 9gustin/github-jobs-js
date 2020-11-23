export default class Job {
    private _id:string = '';
    private _type:string = '';
    private _url:string = '';
    private _createdAt:string = '';
    private _company:string = '';
    private _location:string = '';
    private _title:string = '';
    private _description:string = '';
    private _howToApply:string = '';
    private _companyLogo:string = '';
    constructor(config:any) {
        if (config) {
            this._id = config.id;
            this._type = config.type;
            this._url = config.url;
            this._createdAt = config.createdAt || config.created_at;
            this._company = config.company;
            this._location = config.location;
            this._title = config.title;
            this._description = config.description;
            this._howToApply = config.howToApply || config.how_to_apply;
            this._companyLogo = config.companyLogo || config.company_logo;
        }
    }
    get howToApply() { return this._howToApply; }
    get description() { return this._description; }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get location() {
        return this._location;
    }
    get companyLogo() {
        return this._companyLogo;
    }
    get company() {
        return this._company;
    }
    get type() { return this._type; }
    get createdAtToString():string {
        // if(this._createdAt){
        //     const date1 = new Date();
        //     const date2 = new Date(this._createdAt);
        //     const diffTime = Math.abs(date2 - date1);
        //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
        //     return `${diffDays} days ago`;
        // }

        return '';
    }
}