import React from 'react';

const Filter = ({value, handleChange}) => {
  return <input text={value} onChange={handleChange} />
}

export default Filter
