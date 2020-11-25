import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import MainJob from '../components/MainJob';
import JobContext from '../context/job/JobContext';
import Job from '../models/Job';

const JobView = () => {
    let { id }:{id:string} = useParams();
    const {getOne} = useContext(JobContext);
    const [job, setJob] = useState<Job | null>(null)

    useEffect(() => {
        getOne && getOne(id)
        .then((result:Job|null) => setJob(result))
    }, [])
    
    return (
        <Layout>
            <MainJob job={job}/>
        </Layout>
    );
};

export default JobView;