import React, { ChangeEvent, RefObject } from 'react';
interface Props {
    placeholder:string,
    reference: RefObject<HTMLInputElement>,
    onChange: Function,
    value?:string
}
const Input: React.FC<Props> = ({placeholder,reference, onChange, value}) => {
    return (
        <input onChange={(event) => {onChange(event)}} ref={reference} value={value || ''} type="text" placeholder={placeholder} className="truncate pl-12 text-sm shadow appearance-none border rounded w-full py-4 px-3 mx-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    );
};

export default Input;