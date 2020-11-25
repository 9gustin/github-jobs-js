import React, { ReactNode } from 'react';
import JobProvider from '../context/job/JobProvider';

interface Props { children: ReactNode }

const Main: React.FC<Props> = ({ children }) => {
    return (
        <main className="mb-10">
            {children}
        </main>
    );
};

export default Main;