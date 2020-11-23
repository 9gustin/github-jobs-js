import React from 'react';
import { MdAccessTime } from 'react-icons/md';

interface Props{
    className?:string
}

const IconTime: React.FC<Props> = ({className}) => {
    return (
        <MdAccessTime className={`text-gray-400 ${className}`}/>
    );
};

export default IconTime;