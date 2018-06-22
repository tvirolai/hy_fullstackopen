import React from 'react';

const Person = ({person, remove}) => {
  return (
    <ul>
      <li key={person.name}>{person.name} {person.number} <button onClick={remove(person)}>Poista</button></li>
    </ul>
  )
}

export default Person
