import React from 'react';
import Checkbox from './Checkbox';
import Label from './Label';

const CheckboxItem = (props: {id:string, text: string}) : JSX.Element => {
    return (
        <>
            <Checkbox id={props.id}/>
            <Label htmlFor={props.id} text={props.text}/> 
        </>
    );
};

export default CheckboxItem;