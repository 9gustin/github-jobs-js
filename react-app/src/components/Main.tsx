import React, { useContext } from 'react';
import JobContext from '../context/job/JobContext';
import JobProvider from '../context/job/JobProvider';
import LocationProvider from '../context/location/LocationProvider';
import FormBusqueda from './FormBusqueda';
import JobFilters from './JobFilters';
import JobsList from './JobsList';

interface Props { }

const Main: React.FC<Props> = () => {
    return (
        <JobProvider>
            <main className="mb-10">
                <FormBusqueda />
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