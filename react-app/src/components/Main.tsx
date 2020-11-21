import React from 'react';
import FormBusqueda from './FormBusqueda';
import JobFilters from './JobFilters';
import JobsList from './JobsList';

const Main = () => {
    return (
        <main className="mb-10">
            <FormBusqueda/>
            <div className="pt-6 block md:flex">
                <JobFilters/>
                <JobsList/>
            </div>
        </main>
    );
};

export default Main;