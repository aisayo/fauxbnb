import React from 'react';

const TextField = ({ type, value, onChange, name}) => {
    return (

      <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        name={name}
        />

    );
};

export default TextField;