import React from 'react';
interface Props {
    text: string, htmlFor: string
}
const Label:React.FC<Props> = ({text, htmlFor}) => {
    return (
        <label htmlFor={htmlFor}>{text}</label>
    );
};

export default Label;