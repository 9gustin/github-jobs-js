import React, { RefObject } from 'react';
import Checkbox from './Checkbox';
import Label from './Label';

interface Props {
    id:string, 
    text: string,
    checked: boolean,
    checkboxReference?: RefObject<HTMLInputElement>,
    onChange: Function
}

const CheckboxItem: React.FC<Props>  = ({id, text, checked, checkboxReference, onChange}) => {
    return (
        <>
            <Checkbox id={id} checked={checked} reference={checkboxReference} onChange={onChange}/>
            <Label htmlFor={id} text={text}/> 
        </>
    );
};

export default CheckboxItem;