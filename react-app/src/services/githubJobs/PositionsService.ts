import githubJobsServiceConfig from './config.json';
import Job from '../../models/Job'
import StringNormalizer from '../../utils/StringNormalizer';
import { ApiErrorResponse, ApiOkResponse, ApiResponse, create } from 'apisauce'

const httpClient = create({
    baseURL: githubJobsServiceConfig.url,
    headers: { 'Prueba': 'Value' },
})

const makeRequestUrl = (obj: any): string => {
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

const filter = async ({ search, description, location, lat, long, full_time }: FilterProps): Promise<Job[]> => {
    let response: ApiOkResponse<Job[]> | ApiErrorResponse<Job[]> = await httpClient.get(`/positions.json?${makeRequestUrl({ search, description, location, lat, long, full_time })}`);

    if (response.ok) {
        if (response?.data?.length && response.data.length > 0) return response?.data?.map((job: Job) => new Job(job)) ?? [];
    }

    return [];
}

const getById = async (id: string): Promise<Job | null> => {
    if (!id || id === '') return null;

    let response: ApiOkResponse<Job[]> | ApiErrorResponse<Job[]> = await httpClient.get(`/positions/${id}.json`);

    if (response.ok) {
        return new Job(response.data);
    }

    return null;
}

export {
    getById,
    filter
};