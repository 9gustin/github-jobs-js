import React from 'react';
import {MdWork} from 'react-icons/md';

const IconWork = (props:{className?:string}) => {
    return (
        <MdWork className={`text-gray-400 ${props.className}`}/>
    );
};

export default IconWork;