import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
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
  stateContainsName = (name) => {
    let names = this.state.persons.map(x => x.name)
    return names.includes(name)
  }

  addName = (event) => {
    console.log("addName called")
    event.preventDefault()
    console.log(this.stateContainsName(this.state.newName))
    const persons = this.state.persons.concat({name: this.state.newName, number: this.state.newNumber})
    if (!this.stateContainsName(this.state.newName)) {
      this.setState({
        persons: persons,
      })
    }
    this.setState({
      newName: '',
      newNumber: ''
    })
  }

  filterNames = () => {
    if (this.state.filter !== "") {
      return this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    } else {
      return this.state.persons
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            rajaa näytettäviä: <input value={this.state.newNote}
              onChange={this.handleFilterChange}/>
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
        <table>
          <tbody>
            {this.filterNames().map(x => <tr key={x.name}><td>{x.name}</td><td>{x.number}</td></tr>)}
      </tbody>
      </table>
      </div>
    )
  }
}

export default App
