import React from 'react';
import CheckboxItem from './CheckboxItem';
import IconLocation from './IconLocation';

interface Props {}

const JobFilters: React.FC<Props> = () => {
    return (
        <aside className="w-full md:w-1/4">
            <div className="mb-4 font-medium flex items-center">
                <CheckboxItem id="fulltime-check" text="Fulltime"/>
            </div>
            <div>
                <h6 className="title-font text-gray-400">LOCATION</h6>
                <div className="relative my-4">
                    <span className="absolute pl-4 flex items-center top-0 bottom-0 text-sm"> <IconLocation/> </span>
                    <input type="text" data-component="location-search" placeholder="City, state, zip code or country" className="truncate pl-12 text-sm shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <ul data-component="job-locations">
                    <li className="my-2 flex items-center font-medium">
                        <CheckboxItem id="fulltime-insta" text="Amsterdam"/>    
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default JobFilters;