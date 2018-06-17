import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = ({stats, title}) => {
  const palautteita = stats.map(x => x.value).filter(x => Number.isInteger(x)).reduce((acc, val) => acc + val)
  if (palautteita === 0) {
    return (
      <div>
        <h2>Yhtään palautetta ei ole vielä annettu</h2>
      </div>
    )
  } else {
    return (
      <div>
        <h2>{ title }</h2>
        {stats.map(x => <Statistic text={x.text} value={x.value} />)}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }
  asetaArvoon = (arvio, arvo) => {
    return () => {
      this.setState({ [arvio]: arvo })
    }
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
    let stats = [
      {
        text: "hyvä",
        value: this.state.hyva
      },
      {
        text: "neutraali",
        value: this.state.neutraali
      },
      {
        text: "huono",
        value: this.state.huono
      },
      {
        text: "keskiarvo",
        value: this.keskiArvo()
      },
      {
        text: "positiivisia",
        value: Number(this.positiivisia()) ? `${this.positiivisia()} %` : "0 %"
      }
    ];
    return (
      <div>
        <h2>anna palautetta</h2>
          <Button handleClick={this.asetaArvoon("hyva", this.state.hyva + 1)} text={"hyvä"}/>
          <Button handleClick={this.asetaArvoon("neutraali", this.state.neutraali + 1)} text={"neutraali"}/>
          <Button handleClick={this.asetaArvoon("huono", this.state.huono + 1)} text={"huono"}/>
          <Statistics stats={stats} title="statistiikka"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
