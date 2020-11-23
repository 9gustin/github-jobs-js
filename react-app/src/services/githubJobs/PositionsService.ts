import githubJobsServiceConfig from './config.json';
import Job from '../../models/Job'
import StringNormalizer from '../../utils/StringNormalizer';

const getArgs = (obj: any): string => {
    let str = '';

    Object.keys(obj).forEach(arg => {
        if (!obj[arg]) return;
        if (str !== '') str = `${str}&`;

        let val = typeof obj[arg] === 'string' ? StringNormalizer(obj[arg]) : obj[arg];

        str = `${str}${arg}=${val}`;
    });

    return str;
}

interface FilterProps {
    search?: string,
    description?: string,
    location?: string, 
    lat?: string, 
    long?: string, 
    full_time?: boolean
}

const filter = async ({ search, description, location, lat, long, full_time }: FilterProps):Promise<Job[]> => {
    let response = await fetch(`${githubJobsServiceConfig.url}/positions.json?${getArgs({ search, description, location, lat, long, full_time })}`);

    if (response.status === 200) {
        let jsonResponse = await response.json();
        if (jsonResponse?.length > 0) return jsonResponse.map((job:any)=> new Job(job));
    }

    return [];
}

const getById = async (id:string) => {
    if (!id || id === '') return false;

    let response = await fetch(`${githubJobsServiceConfig.url}/positions/${id}.json`);

    if (response.status === 200) {
        let jsonResponse = await response.json();
        if (jsonResponse) return new Job(jsonResponse);
    }

    return false;
}

export {
    getById,
    filter
};