import React, { Component } from 'react';
// Component Imports
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/footer';
import { Link, animateScroll as scroll } from "react-scroll";

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
            <h1>DREW <span id="last-name">JOHNSON</span></h1>
            <div className="change-text">{this.state.words[this.state.selected]}{/*<span className="blinker"></span>*/}</div>
            <div className="logos">
              <a href="https://github.com/Drewsup123" target="_blank"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.linkedin.com/in/drew-johnson-99ab34171/" target="_blank"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </header>
        <i className="fa fa-chevron-down"></i>
        <div className="sections">
          <AboutMe />
          <Projects />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
