import React from 'react';

const Input = (props:{placeholder:string}) => {
    return (
        <input data-component="text-search" type="text" placeholder={props.placeholder} className="truncate pl-12 text-sm shadow appearance-none border rounded w-full py-4 px-3 mx-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    );
};

export default Input;