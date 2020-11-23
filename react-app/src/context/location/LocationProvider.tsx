import { ReactNode, useEffect, useState } from 'react';
import ILocation from '../../models/Location';
import LocationContext from './LocationContext';

interface Props {
    children: ReactNode
}

const LocationProvider = ({ children }: Props):JSX.Element => {
    const [locations, setLocations] = useState<ILocation[] | null>(null);

    useEffect(() => {
        setLocations([
            new ILocation({ name: 'London'}),
            new ILocation({ name: 'Amsterdam'}),
            new ILocation({ name: 'New York'}),
            new ILocation({ name: 'Berlin' })
        ])
    }, []);
    
    return (
        <LocationContext.Provider value={{ locations }}>
            {children}
        </LocationContext.Provider>
    );
}

export default LocationProvider;