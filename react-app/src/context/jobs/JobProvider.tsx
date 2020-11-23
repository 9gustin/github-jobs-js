import { ReactNode, useEffect, useState } from 'react';
import Job from '../../pages/Job';
import JobContext from './JobContext';

interface Props {
    children: ReactNode
}
interface SearchProps {
    text: string,
    location: string,
    fullTime: boolean
}

const JobProvider = ({ children }: Props) => {
    const [jobs, setJobs] = useState(Job);

    const searchJobs = ({ text, location, fullTime }: SearchProps) => {
        
    }

    return (
        <JobContext.Provider value={{ jobs, searchJobs }}>
            {children}
        </JobContext.Provider>
    );
}

export default JobProvider;