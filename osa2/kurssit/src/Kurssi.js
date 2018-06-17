import React from 'react';
import Osa from './Osa'

const Kurssi = ({kurssi}) => {
  return (
    <div>
    <h1>{kurssi.nimi}</h1>
    {kurssi.osat.map(x => <Osa nimi={x.nimi} tehtavia={x.tehtavia} key={x.id} />)}
    yhteensä {kurssi.osat.map(x => x.tehtavia).reduce((acc, val) => acc + val)} tehtävää
    </div>
  )
}

export default Kurssi
