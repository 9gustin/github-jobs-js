import React from 'react';
import LocationProvider from '../context/location/LocationProvider';
import FormBusqueda from './FormBusqueda';
import JobFilters from './JobFilters';
import JobsList from './JobsList';
import Main from './Main';
import Aside from './Aside';
import PrincipalContainer from './PrincipalContainer';
interface Props { }

const MainPrincipal: React.FC<Props> = () => {
    return (

            <Main>
                <FormBusqueda />
                <div className="pt-6 block md:flex">
                    <Aside>
                        <LocationProvider>
                            <JobFilters />
                        </LocationProvider>
                    </Aside>
                    <PrincipalContainer>
                        <JobsList />
                    </PrincipalContainer>
                </div>
            </Main>

    );
};

export default MainPrincipal;