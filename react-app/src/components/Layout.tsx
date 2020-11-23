import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
interface Props {
    children:ReactNode
}
const Layout: React.FC<Props> =({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;