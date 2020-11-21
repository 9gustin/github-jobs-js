import React from 'react';

const Checkbox = (props: {id:string}) => {
    return (
        <input type="checkbox" className="mr-3 h-5 w-5" id={props.id}/>
    );
};

export default Checkbox;