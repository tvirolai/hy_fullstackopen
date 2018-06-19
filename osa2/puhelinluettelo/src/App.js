import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }
  handleNoteChange = (event) => {
    console.log("handleNoteChange called")
    console.log(event.target.value)
    this.setState({newName: event.target.value})
  }

  addName = (event) => {
    console.log("addName called")
    event.preventDefault()
    const persons = this.state.persons.concat({name: this.state.newName})
    this.setState({
      persons: persons,
      newName: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input value={this.state.newNote}
                         onChange={this.handleNoteChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(x => <p key={x.name}>{x.name}</p>)}
      </div>
    )
  }
}

export default App
