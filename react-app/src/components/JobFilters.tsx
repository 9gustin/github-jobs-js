import React, { createRef, useContext } from 'react';
import JobContext from '../context/job/JobContext';
import LocationContext from '../context/location/LocationContext';
import CheckboxItem from './CheckboxItem';
import IconLocation from './IconLocation';
import Input from './Input';

interface Props { }

const JobFilters: React.FC<Props> = () => {
    const { locations } = useContext(LocationContext);
    const checkFullTime = createRef<HTMLInputElement>();
    const { filters, setFullTime, setLocation } = useContext(JobContext);

    const inputLocation = createRef<HTMLInputElement>();

    const handleFullTimeChange = () => {
        setFullTime && setFullTime(checkFullTime?.current?.checked);
    }

    const handleChangeLocation = (location:string | null = null) => {
        setLocation && setLocation(location || inputLocation?.current?.value)
    }

    return (
        <aside className="w-full md:w-1/4">
            <div className="mb-4 font-medium flex items-center">
                <CheckboxItem id="fulltime-check" text="Full-Time" checked={filters?.fullTime || false} checkboxReference={checkFullTime} onChange={handleFullTimeChange} />
            </div>
            <div>
                <h6 className="title-font text-gray-400">LOCATION</h6>
                <div className="relative my-4">
                    <span className="absolute pl-4 flex items-center top-0 bottom-0 text-sm"> <IconLocation /> </span>
                    <Input placeholder="City, state, zip code or country" onChange={() => {handleChangeLocation()}} reference={inputLocation} value={filters?.location}/>
                </div>
                <ul data-component="job-locations">
                    {locations && locations.map(location => (
                        <li key={`LiItem-${location.name}`} className="my-2 flex items-center font-medium">
                            <CheckboxItem key={`CheckboxItem-${location.name}`} id={location.name}
                                text={location.name} checked={(location.name === filters?.location)}
                                onChange={() => { handleChangeLocation(location.name); }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default JobFilters;