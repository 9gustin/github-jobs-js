import React from 'react';
import IconBack from './IconBack';
interface Props {
    text?: string;
}
const LinkBack:React.FC<Props> = ({text}) => {
    return (
        <a onClick={()=>{window.history.back();}} className="cursor-pointer text-blue-500 flex items-center text-sm font-medium mb-8">
            <IconBack className="mr-2" />
            {text || "Back"}
        </a>
    );
};

export default LinkBack;