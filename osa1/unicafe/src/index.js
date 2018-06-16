import React from 'react';
import ReactDOM from 'react-dom';

const Nappi = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }
  klikkiHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1
    })
  }
  klikkiNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1
    })
  }
  klikkiHuono = () => {
    this.setState({
      huono: this.state.huono + 1
    })
  }
  aantenMaara = () => {
    const { hyva, neutraali, huono } = this.state;
    return hyva + neutraali + huono;
  }
  keskiArvo = () => {
    if (this.aantenMaara() === 0) {
      return 0
    } else {
      return (this.state.hyva + (-1 * this.state.huono)) / this.aantenMaara();
    }
  }
  positiivisia = () => this.state.hyva / this.aantenMaara() * 100

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
          <Nappi handleClick={this.klikkiHyva} text={"hyvä"}/>
          <Nappi handleClick={this.klikkiNeutraali} text={"neutraali"}/>
          <Nappi handleClick={this.klikkiHuono} text={"huono"}/>
        <h2>statistiikka</h2>
        <p>hyvä {this.state.hyva}</p>
        <p>neutraali {this.state.neutraali}</p>
        <p>huono {this.state.huono}</p>
        <p>keskiarvo {this.keskiArvo()}</p>
        <p>positiivisia {this.positiivisia()} %</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
