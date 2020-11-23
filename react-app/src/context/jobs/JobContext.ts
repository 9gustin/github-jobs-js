import { createContext } from "react";
import Job from "../../models/Job";
interface Props {
    jobs: (Job[] | null),
    searchJobs?: Function
}
const initialProps:Props = {jobs: []};

const JobContext = createContext<Props>(initialProps);

export default JobContext;