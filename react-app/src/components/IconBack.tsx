import React from 'react';
import {MdKeyboardBackspace} from 'react-icons/md';

interface Props {
    className?: string;
}
const IconBack:React.FC<Props> = ({className}) => {
    return (
        <MdKeyboardBackspace className={className}/>
    );
};

export default IconBack;