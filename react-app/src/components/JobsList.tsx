import React, { useContext } from 'react';
import JobContext from '../context/job/JobContext';
import Job from '../models/Job';
import JobItem from './JobItem';

interface Props { }
const JobsList: React.FC<Props> = (): JSX.Element => {
    const { jobs } : {jobs:(Job[] | null)}= useContext(JobContext);

    return (
        <ul data-component="job-list" className="w-full md:w-3/4 pl-2 md:pl-10">
            {
                jobs && jobs.map(job => (
                    <li className="bg-white rounded shadow-lg p-2 my-6">
                        <JobItem job={job}/>
                    </li>
                ))
            }
        </ul>
    );
};

export default JobsList;