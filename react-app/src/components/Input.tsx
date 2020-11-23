import React from 'react';
interface Props {
    placeholder:string
}
const Input: React.FC<Props> = ({placeholder}) => {
    return (
        <input data-component="text-search" type="text" placeholder={placeholder} className="truncate pl-12 text-sm shadow appearance-none border rounded w-full py-4 px-3 mx-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    );
};

export default Input;