export default class Job {
    #id;
    #type;
    #url;
    #createdAt;
    #company;
    #location;
    #title;
    #description;
    #howToApply;
    #companyLogo;
    constructor(config){
        if(config){
            this.#id = config.id;
            this.#type = config.type;
            this.#url = config.url;
            this.#createdAt = config.createdAt || config.created_at;
            this.#company = config.company;
            this.#location = config.location;
            this.#title = config.title;
            this.#description = config.description;
            this.#howToApply = config.howToApply || config.how_to_apply;
            this.#companyLogo = config.companyLogo || config.company_logo;
        }
    }

    get id() {
        return this.#id;
    }
    get title(){
        return this.#title;
    }
    get location(){
        return this.#location;
    }
}