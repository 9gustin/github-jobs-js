import React from 'react';
import { MdAccessTime } from 'react-icons/md';

const IconTime = (props:{className?:string}) => {
    return (
        <MdAccessTime className={`text-gray-400 ${props.className}`}/>
    );
};

export default IconTime;