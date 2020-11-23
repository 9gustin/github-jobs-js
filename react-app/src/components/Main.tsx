import React from 'react';
import JobProvider from '../context/jobs/JobProvider';
import FormBusqueda from './FormBusqueda';
import JobFilters from './JobFilters';
import JobsList from './JobsList';

interface Props {}
const Main: React.FC<Props>= () => {
    return (
        <JobProvider>
            <main className="mb-10">
                <FormBusqueda />
                <div className="pt-6 block md:flex">
                    <JobFilters />
                    <JobsList />
                </div>
            </main>
        </JobProvider>
    );
};

export default Main;