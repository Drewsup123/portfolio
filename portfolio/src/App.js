import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      words : ['Full Stack Web Developer', 'Software Engineer', 'Programmer', 'Designer'],
      selected : 0,
    }
  }


  typingEffect(words){
    let arr = [...words]; //make a copy of state array
    const length = arr.length;
    setInterval(() => {
      let {selected} = this.state;
      if(selected < length-1){
        selected++;
      }else{
        selected = 0;
      }
      this.setState({selected : selected})
    },3500)
  }


  componentDidMount(){
    this.typingEffect(this.state.words);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-content">
            <h1>Drew Johnson</h1>
            <div className="change-text">{this.state.words[this.state.selected]}{/*<span className="blinker"></span>*/}</div>
            <div className="logos">
            <i class="fab fa-linkedin-in"></i>
              <i class="fab fa-github"></i>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
