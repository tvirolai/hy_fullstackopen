import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0
      }
    }
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  selectRandom = () => {
    this.setState({selected: this.getRandomInt(anecdotes.length)})
  }
  vote = () => {
    let stateCopy = {...this.state};
    const avain = "" + this.state.selected;
    stateCopy["pisteet"][avain] += 1
    this.setState(stateCopy);
  }
  getIndexOfMostVoted = () => {
    let top = {
      index: -1,
      value: -1
    };
    for (let prop in this.state.pisteet) {
      if (this.state.pisteet[prop] > top.value) {
        top.value = this.state.pisteet[prop]
        top.index = prop
      }
    }
    return top;
  }
  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <br />
        has {this.state.pisteet[this.state.selected]} votes
        <br />
        <Button handleClick={this.vote} text={"vote"} />
        <Button handleClick={this.selectRandom} text={"next anecdote"} />
        <br />
        <h3>anecdote with most votes:</h3>
        {this.props.anecdotes[parseInt(this.getIndexOfMostVoted().index)]}
        <br />
        has {this.getIndexOfMostVoted().value} votes
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
