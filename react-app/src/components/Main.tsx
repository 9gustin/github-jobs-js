import React, { useContext, useState } from 'react';
import JobContext from '../context/job/JobContext';
import JobProvider from '../context/job/JobProvider';
import LocationProvider from '../context/location/LocationProvider';
import SearchFilters from '../models/SearchFilters';
import FormBusqueda from './FormBusqueda';
import JobFilters from './JobFilters';
import JobsList from './JobsList';

interface Props { }

const Main: React.FC<Props> = () => {
    const { searchJobs }: { searchJobs?: Function } = useContext(JobContext);
    const [searchFilters, setSearchFilters] = useState<SearchFilters | null>(null);

    const handleSearch = () => {
        console.log('a')
    }

    return (
        <JobProvider>
            <main className="mb-10">
                <FormBusqueda handleSearch={handleSearch} />
                <div className="pt-6 block md:flex">
                    <LocationProvider>
                        <JobFilters />
                    </LocationProvider>
                    <JobsList />
                </div>
            </main>
        </JobProvider>
    );
};

export default Main;