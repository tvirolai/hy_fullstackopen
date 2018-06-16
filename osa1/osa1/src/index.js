import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const nimi = "Kaija"
  const ika = 22
  return (
    <div>
      <h1>Season's greetings</h1>
      <Hello name="Jeesus" age={24+10}/>
      <Hello name={ nimi } age={ ika } />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
