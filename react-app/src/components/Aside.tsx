import React, { ReactNode } from 'react';
interface Props {
    children:ReactNode
}
const Aside:React.FC<Props> = ({children}) => {
    return (
        <aside className="w-full md:w-1/4">
            {children}
        </aside>
    );
};

export default Aside;