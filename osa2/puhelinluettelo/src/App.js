import React from 'react';
import Person from './Person'
import Filter from './Filter'
import personService from './services'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }
  componentDidMount() {
    personService
      .getAll()
      .then(response => {
        this.setState({persons: response.data})
      })
  }
  handleNoteChange = (event) => {
    console.log("handleNoteChange called")
    console.log(event.target.value)
    this.setState({newName: event.target.value})
  }

  handleNumberChange = (event) => {
    console.log("handleNoteChange called")
    console.log(event.target.value)
    this.setState({newNumber: event.target.value})
  }
  handleFilterChange = (event) => {
    console.log("handleFilterChange called")
    console.log(event.target.value)
    this.setState({filter: event.target.value})
  }
  stateContainsName = (name) => this.state.persons.map(x => x.name).includes(name)

  stateContainsNumber = (number) => this.state.persons.map(x => x.number).includes(number)

  addName = (event) => {
    console.log("addName called")
    event.preventDefault()
    console.log(this.stateContainsName(this.state.newName))
    const newPerson = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: Math.max(...this.state.persons.map(x => x.id)) + 1
    }
    console.log(newPerson)
    const persons = this.state.persons.concat(newPerson)
    if (!this.stateContainsName(this.state.newName) && this.state.newName.length > 1) {
      this.setState({
        persons: persons,
      })
      personService.create(newPerson)
    }

    if (this.stateContainsName(this.state.newName) && !this.stateContainsNumber(this.state.newNumber)) {
      if (window.confirm(`${this.state.newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
        const person = {
          name: this.state.newName,
          number: this.state.newNumber,
          id: this.state.persons.filter(x => x.name === this.state.newName).pop().id
        }
        personService.updatePerson(person)
        const newPersonList = this.state.persons.filter(x => x.name !== person.name).concat(person)
        this.setState({persons: newPersonList})
      }
    }

    this.setState({
      newName: '',
      newNumber: ''
    })
  }

  removeName = (event) => {
    return () => {
      const updatedPersons = this.state.persons.filter(x => x !== event)
      this.setState({persons: updatedPersons})
      personService
        .remove(event)
    }
  }

  filterNames = () => (this.state.filter !== "") ? this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase())) : this.state.persons

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            rajaa näytettäviä: <Filter value={this.state.filter} handleChange={this.handleFilterChange}/>
          </div>
          <h3>Lisää uusi</h3>
          <div>
            nimi: <input value={this.state.newNote}
              onChange={this.handleNoteChange}/>
          </div>
          <div>
            numero: <input value={this.state.newNote}
              onChange={this.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
            {this.filterNames().map(person => <Person key={person.name} person={person} remove={this.removeName}/>)}
      </div>
    )
  }
}

export default App
