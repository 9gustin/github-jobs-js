import githubJobsServiceConfig from './config.js';
import Job from '../../models/job.js';

let positionsService = {};

positionsService.filter = async ({ search, description, location, lat, long, fullTime }) => {
    let response = await fetch(`${githubJobsServiceConfig.url}/positions.json?search=${search}&description=${description || ''}&location=${location || ''}&lat=${lat || ''}&long=${long || ''}&full_time=${fullTime}`);

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