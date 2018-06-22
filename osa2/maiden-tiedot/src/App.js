import React from 'react'
import axios from 'axios'
import List from './List'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCountries: [],
      filteredCountries: [],
      entry: ''
    }
  }
  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({allCountries: response.data})
        this.setState({filteredList: response.data})
      })
  }
  handleInputChange = (event) => {
    this.setState({entry: event.target.value})
    const filteredList = this.state.allCountries.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({filteredCountries: filteredList})
  }
  render() {
    return (
      <div>
        Find countries: <input value={this.state.entry} onChange={this.handleInputChange}/>
        <List countries={this.state.filteredCountries} />
      </div>
    )
  }
}

export default App
