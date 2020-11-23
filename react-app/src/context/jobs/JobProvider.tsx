import { ReactNode, useEffect, useState } from 'react';
import JobContext from './JobContext';
import {filter} from '../../services/githubJobs/PositionsService';
import Job from '../../models/Job';

interface Props {
    children: ReactNode
}
interface SearchProps {
    text: string,
    location: string,
    fullTime: boolean
}

const JobProvider = ({ children }: Props):JSX.Element => {
    const [jobs, setJobs] = useState<Job[] | null>(null);

    const searchJobs = ({ text, location, fullTime }: SearchProps) => {
        
    }

    useEffect(() => {
        filter({})
        .then(res => setJobs(res))
    }, [])

    return (
        <JobContext.Provider value={{ jobs, searchJobs }}>
            {children}
        </JobContext.Provider>
    );
}

export default JobProvider;