import { ReactNode, useReducer, useState } from 'react';
import JobContext from './JobContext';
import {filter, getById} from '../../services/githubJobs/PositionsService';
import Job from '../../models/Job';
import SearchFilters from '../../models/SearchFilters';
import JobFiltersReducer from './JobFiltersReducer';
import { SET_LOCATION, SET_SEARCH, SET_FULLTIME } from './JobFiltersActions';

interface Props {
    children: ReactNode
}

const initialProps:SearchFilters = {
    search: '',
    location: '',
    fullTime: false
}

const JobProvider = ({ children }: Props):JSX.Element => {
    const [jobs, setJobs] = useState<Job[] | null>(null);
    const [filters, dispatchFilters] = useReducer(JobFiltersReducer, initialProps);

    const searchJobs = ():void => {
        filter({...filters, full_time: filters.fullTime})
        .then(res => setJobs(res))
    }

    const getOne = async (id:string):Promise<Job | null> => {
        return getById(id);
    }

    const setLocation = (value:string):void => dispatchFilters({type:SET_LOCATION, payload: value})
    const setSearch = (value:string):void => dispatchFilters({type:SET_SEARCH, payload: value})
    const setFullTime = (value:boolean):void => dispatchFilters({type:SET_FULLTIME, payload: value})

    return (
        <JobContext.Provider value={{ jobs, searchJobs, setLocation, setSearch, setFullTime, filters, getOne }}>
            {children}
        </JobContext.Provider>
    );
}

export default JobProvider;