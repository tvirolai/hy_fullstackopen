import React from 'react'
import Info from './Info'

const List = ({countries}) => {
  if (countries.length === 1) {
    return <Info countries={countries} />
  }
  if (countries.length <= 10) {
    return (
      <ul>
      {countries.map(x => <li key={x.name}>{x.name}</li>)}
    </ul>
    )
  } else {
    return (
      <p>Too many matches, specify another filter.</p>
    )
  }
}

export default List
