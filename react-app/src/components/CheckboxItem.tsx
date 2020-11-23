import React from 'react';
import Checkbox from './Checkbox';
import Label from './Label';

interface Props {
    id:string, 
    text: string
}

const CheckboxItem: React.FC<Props>  = ({id, text}) => {
    return (
        <>
            <Checkbox id={id}/>
            <Label htmlFor={id} text={text}/> 
        </>
    );
};

export default CheckboxItem;