import React from 'react';
import {MdWork} from 'react-icons/md';
interface Props {
    className?:string
}
const IconWork = ({className}:Props) => {
    return (
        <MdWork className={`text-gray-400 ${className}`}/>
    );
};

export default IconWork;