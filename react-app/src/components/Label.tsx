import React from 'react';

const Label = (props: { text: string, htmlFor: string }): JSX.Element => {
    return (
        <label htmlFor={props.htmlFor}>{props.text}</label>
    );
};

export default Label;