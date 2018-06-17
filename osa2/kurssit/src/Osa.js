import React from 'react';
import ReactDOM from 'react-dom';

const Osa = ({nimi, tehtavia, id}) => {
  return (
    <p>{nimi} {tehtavia}</p>
  )
}

export default Osa
