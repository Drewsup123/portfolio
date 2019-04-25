import React, { Component } from 'react';
// Component Imports
import AboutMe from './components/AboutMe';
import Contact from './components/contact';
import Footer from './components/footer';
import Projects from './components/Projects';
import { Link, Element } from "react-scroll";

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
      <Element name='header' />
        <header className="App-header">
          <div className="header-content">
            <h1>DREW <span id="last-name">JOHNSON</span></h1>
            <div className="change-text">{this.state.words[this.state.selected]}{/*<span className="blinker"></span>*/}</div>
            <div className="logos">
              <a href="https://www.linkedin.com/in/drew-johnson-99ab34171/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="http://www.github.com/Drewsup123" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </header>
        <Link to="test" smooth={true}>
          <i className="fa fa-chevron-down"></i>
        </Link>
        <div className="sections">
          <Element name="test"/>
          <AboutMe />
          {/* <Logos /> */}
          {/* <Projects /> */}
          <h1 id="project-header">Projects</h1>
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
