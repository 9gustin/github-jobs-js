import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = (props:{children:ReactNode}): JSX.Element => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
};

export default Layout;