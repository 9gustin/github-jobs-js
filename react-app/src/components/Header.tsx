import React from 'react';
interface Props {}
const Header: React.FC<Props> = () => {
    return (
        <header className="py-6">
            <h1 className="text-xl">
                <strong className="title-font mr-1">Github</strong>
                <span className="title-font">jobs</span>
            </h1>
        </header>
    );
};

export default Header;