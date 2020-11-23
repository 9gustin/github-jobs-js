import { createContext } from "react";
import Job from "../../models/Job";
import SearchFilters from "../../models/SearchFilters";
interface StateType {
    jobs: (Job[] | null),
    filters?: SearchFilters,
    searchJobs?: Function,
    setLocation?: Function,
    setText?: Function
    setFullTime?: Function
}
const initialProps:StateType = {jobs: []};

const JobContext = createContext<StateType>(initialProps);

export default JobContext;
export type {StateType};