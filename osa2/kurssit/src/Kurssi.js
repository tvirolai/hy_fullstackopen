import React from 'react';
import ReactDOM from 'react-dom';
import Osa from './Osa'

const Kurssi = ({kurssi}) => {
  return (
    <div>
    <h1>{kurssi.nimi}</h1>
    {kurssi.osat.map(x => <Osa nimi={x.nimi} tehtavia={x.tehtavia} key={x.id} />)}
    </div>
  )
}

export default Kurssi
