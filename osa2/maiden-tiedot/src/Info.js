import React from 'react'

const Info = ({countries}) => {
  const c = countries[0]
  return (
    <div padding="50px">
      <h1>{c.name} {c.altSpellings[1]}</h1>
      <p>capital: {c.capital}</p>
      <p>population: {c.population}</p>
      <img width="200px" height="150px" src={c.flag} />
    </div>
  )
}

export default Info
