import React from 'react';
interface Props {
    text: string, 
    className?:string
}
const SectionTitle:React.FC<Props> = ({text, className}) => {
    return (
    <h6 className={`title-font text-gray-400 ${className || ''}`}>{text}</h6>
    );
};

export default SectionTitle;