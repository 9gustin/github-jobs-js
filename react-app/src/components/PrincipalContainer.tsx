import React, { ReactNode } from 'react';
interface Props {
    children:ReactNode
}
const PrincipalContainer:React.FC<Props> = ({children}) => {
    return (
        <div className="w-full md:w-3/4 pl-2 md:pl-10">
            {children}
        </div>
    );
};

export default PrincipalContainer;