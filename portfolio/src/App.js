import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      words : ['Web Developer', 'Software Engineer', 'Programmer', 'Designer'],
      selected : 0,
    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello My Name is Drew <br /> 
            I am a 
            <div className="change-text">{this.state.words[this.state.selected]}<span className="blinker"></span></div>
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
