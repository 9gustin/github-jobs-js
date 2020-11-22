import React from 'react';
import { MdAccessTime } from 'react-icons/md';

const IconTime = (props:{className?:string}): JSX.Element => {
    return (
        <MdAccessTime className={`text-gray-400 ${props.className}`}/>
    );
};

export default IconTime;