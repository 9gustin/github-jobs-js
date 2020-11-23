import { createContext } from "react";
import ILocation from "../../models/Location";

interface StateType {
    locations: ILocation[] | null;
}
const initialProps:StateType = {locations: []};

const LocationContext = createContext<StateType>(initialProps);

export default LocationContext;