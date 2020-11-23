import React from 'react';
import Job from '../models/Job';
import IconLocation from './IconLocation';
import IconTime from './IconTime';

interface Props {
    job: Job
}

const JobItem: React.FC<Props> = ({ job }): JSX.Element => {
    return (
        <a className="flex overflow-hidden" href={job.publicUrl}>
            <div className="w-28 h-28 flex justify-center p-1">
                <img src={job.companyLogo}
                    alt="" className="object-contain  rounded" />
            </div>
            <div className="text-xs w-3/4 lg:w-11/12 pl-2">
                <strong className="my-3">{job.company}</strong>
                <h5 className="text-base mt-2 mb-4">{job.title}</h5>
                <span className="rounded px-2 py-1 mt-2 border-solid border-blue-900 border-2 text-xs font-bold">{job.type}</span>
                <div className="flex justify-end float-right">
                    <span className="text-gray-400 flex items-center my-4 mr-4 text-xs"><IconLocation className="mr-1" /> {job.location}</span>
                    <span className="text-gray-400 flex items-center my-4 mr-4 text-xs"> <IconTime className="mr-1" /> {job.createdAtToString}</span>
                </div>
            </div>
        </a>
    );
};

export default JobItem;