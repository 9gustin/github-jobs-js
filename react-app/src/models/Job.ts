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
        return this._title || '';
    }
    get location() {
        return this._location;
    }
    get companyLogo() {
        return this._companyLogo;
    }
    get company() {
        return this._company || '';
    }
    get type() { return this._type; }
    get createdAtToString():string {
        if(this._createdAt){
            const date1 = new Date();
            const date2 = new Date(this._createdAt);
            var difference = date1.getTime() - date2.getTime();
            var days = Math.ceil(difference / (1000 * 3600 * 24));
    
            return `${days} days ago`;
        }

        return '';
    }
}