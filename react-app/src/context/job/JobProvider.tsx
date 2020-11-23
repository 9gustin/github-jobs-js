import { ReactNode, useEffect, useReducer, useState } from 'react';
import JobContext from './JobContext';
import {filter} from '../../services/githubJobs/PositionsService';
import Job from '../../models/Job';
import SearchFilters from '../../models/SearchFilters';
import JobFiltersReducer from './JobFiltersReducer';
import { SET_LOCATION, SET_TEXT, SET_FULLTIME } from './JobFiltersActions';

interface Props {
    children: ReactNode
}

const initialProps:SearchFilters = {
    text: '',
    location: '',
    fullTime: false
}

const JobProvider = ({ children }: Props):JSX.Element => {
    const [jobs, setJobs] = useState<Job[] | null>(null);
    const [filters, dispatchFilters] = useReducer(JobFiltersReducer, initialProps);

    const searchJobs = ():void => {
        
    }

    const setLocation = (value:string):void => dispatchFilters({type:SET_LOCATION, payload: value})
    const setText = (value:string):void => dispatchFilters({type:SET_TEXT, payload: value})
    const setFullTime = (value:boolean):void => dispatchFilters({type:SET_FULLTIME, payload: value})

    useEffect(() => {
        filter({})
        .then(res => setJobs(res))
    }, [])

    return (
        <JobContext.Provider value={{ jobs, searchJobs, setLocation, setText, setFullTime, filters }}>
            {children}
        </JobContext.Provider>
    );
}

export default JobProvider;