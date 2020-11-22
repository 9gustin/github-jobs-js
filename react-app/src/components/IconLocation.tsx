import React from 'react';
import { MdPublic } from 'react-icons/md';

const IconLocation = (props:{className?:string}): JSX.Element => {
    return (
        <MdPublic className={`text-gray-400 ${props.className}`}/>
    );
};

export default IconLocation;