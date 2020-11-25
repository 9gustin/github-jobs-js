import React from 'react';
import Job from '../models/Job';
import Aside from './Aside';
import IconLocation from './IconLocation';
import IconTime from './IconTime';
import LinkBack from './LinkBack';
import Main from './Main';
import PrincipalContainer from './PrincipalContainer';
import SectionTitle from './SectionTitle';

interface Props {
    job: Job|null
}
const MainJob:React.FC<Props> = ({job}) => {
    return (
        <Main>
            <div className="block md:flex">
                <Aside>
                    <LinkBack text="Back to search" />
                    <SectionTitle text="HOW TO APPLY" className="mb-3" />
                    <p className="font-medium overflow-hidden" dangerouslySetInnerHTML={{__html:job?.howToApply || ''}}></p>
                </Aside>
                <PrincipalContainer>
                    <h2 className="font-bold text-lg md:text-3xl title-font md:flex md:items-center">
                        <span className="block md:inline">{job?.title}</span>
                        <span className="mt-2 md:mt-0 md:ml-3 rounded px-2 py-1 border-solid border-blue-900 text-blue-900 border-2 text-xs font-bold">{job?.type}</span>
                    </h2>
                    <span className="text-gray-400 flex items-center my-2 mr-4 text-xs"> <IconTime className="mr-2"/> {job?.createdAtToString} </span>
                    <div className="my-8 flex">
                        <div className="w-16 h-16 flex justify-center p-1">
                            <img src={job?.companyLogo} className="object-contain rounded" />
                        </div>
                        <div className="ml-3 text-lg">
                            <strong>{job?.company}</strong>
                            <span className="text-gray-400 mt-2 flex items-center text-xs">
                                <IconLocation className="mr-2"/>
                                {job?.location}
                            </span>
                        </div>

                    </div>
                    <p className="overflow-hidden" dangerouslySetInnerHTML={{__html:job?.description || ''}}></p>
                </PrincipalContainer>
            </div>
        </Main>
    );
};

export default MainJob;