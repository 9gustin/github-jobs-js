import React from 'react';

interface Props {id:string};

const Checkbox: React.FC<Props> = ({id}) => {
    return (
        <input type="checkbox" className="mr-3 h-5 w-5" id={id}/>
    );
};

export default Checkbox;