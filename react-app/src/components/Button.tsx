import React from 'react';

const Button = (props: { text: string }) => {
    return (
        <button type="submit" className="text-sm font-medium w-1/3 lg:w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 mr-2 bottom-0 right-0 top-0 rounded focus:outline-none focus:shadow-outline absolute">{props.text}</button>
    );
};

export default Button;