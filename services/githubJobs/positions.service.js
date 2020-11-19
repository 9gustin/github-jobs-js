import githubJobsServiceConfig from './config.js';
import Job from '../../models/job.js';

let positionsService = {};
const getArgs = obj => {
    let str = '';

    Object.keys(obj).forEach(arg => {
        if(!obj[arg]) return;
        if(str !== '') str = `${str}&`;

        let val = typeof obj[arg] === 'string' ? obj[arg].replace(' ', '+') : obj[arg];

        str = `${str}${arg}=${val}`;
    });

    return str;
}

positionsService.filter = async ({ search, description, location, lat, long, full_time }) => {
    let response = await fetch(`${githubJobsServiceConfig.url}/positions.json?${getArgs({ search, description, location, lat, long, full_time })}`);

    if(response.status === 200){
        let jsonResponse = await response.json();
        if(jsonResponse?.length > 0) return jsonResponse.map(job => new Job(job));
    }
    
    return false;
}

positionsService.getById = async id => {
    if (!id || id === '') return false;

    let response = await fetch(`${githubJobsServiceConfig.url}/positions/${id}.json`);

    if(response.status === 200){
        let jsonResponse = await response.json();
        if(jsonResponse) return new Job(jsonResponse);
    }
    
    return false;
}

export default positionsService;