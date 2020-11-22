import { ReactNode, useEffect, useState } from 'react';
import JobContext from './JobContext';

interface Props {
    children: ReactNode
}

const JobProvider = ({ children }: Props): JSX.Element => {
    const [jobs, setJobs] = useState([]);

    const searchJobs = ({text}: {text:string}) => {

    }

    return <JobContext.Provider value={""}>
        {children}
    </JobContext.Provider>
}

export default JobProvider;