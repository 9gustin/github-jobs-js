import React from 'react';
import { MdPublic } from 'react-icons/md';

interface Props{
    className?:string
}
const IconLocation: React.FC<Props> = ({className}) => {
    return (
        <MdPublic className={`text-gray-400 ${className}`}/>
    );
};

export default IconLocation;