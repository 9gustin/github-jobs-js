import React, { RefObject } from 'react';

interface Props { 
    id: string, 
    checked: boolean, 
    reference?: RefObject<HTMLInputElement>, 
    onChange: Function };

const Checkbox: React.FC<Props> = ({ id, checked, reference, onChange }) => {
    return (
        <input type="checkbox" checked={checked} ref={reference} className="mr-3 h-5 w-5" id={id} onChange={(event) => { onChange(event) }} />
    );
};

export default Checkbox;