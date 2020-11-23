import React from 'react';
import JobItem from './JobItem';
interface Props {}
const JobsList: React.FC<Props> = () => {
    return (
        <ul data-component="job-list" className="w-full md:w-3/4 pl-2 md:pl-10">
            <li className="bg-white rounded shadow-lg p-2 my-6">
                <JobItem />
            </li>
            <li className="bg-white rounded shadow-lg p-2 my-6">
                <JobItem />
            </li>
            <li className="bg-white rounded shadow-lg p-2 my-6">
                <JobItem />
            </li>
        </ul>
    );
};

export default JobsList;