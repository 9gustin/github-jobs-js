import React from 'react';

interface Props{}
//TODO: Fix absolute position
//relative lg:absolute 
const Footer: React.FC<Props> = ()=> {
    return (
        <footer className="bottom-0 left-0 right-0 text-center py-4">
            <p className="text-gray-400 title-font">
                9gustin @ DevChallenges.io
        </p>
        </footer>
    );
};

export default Footer;