import React, { Component } from 'react';
// Component Imports
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { Element } from "react-scroll";
import AnimatedBtn from './components/AnimatedBtn';
import Modal from 'react-responsive-modal';
import Contact from './components/contact'

class App extends Component {
  constructor(){
    super();
    this.state = {
        words : ['Full Stack Web Developer', 'Software Engineer', 'Programmer', 'Designer'],
        selected : 0,
        B_aboutMeOpen : false,
        B_ProjectsOpen : false,
        B_ContactOpen : false,
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

OpenModal = name => {
  switch(name){
    case 'B_aboutMeOpen':
      this.setState({ B_aboutMeOpen: true });
      break;
    case 'B_ProjectsOpen':
      this.setState({B_ProjectsOpen : true})
      break;
    case 'B_ContactOpen':
      this.setState({B_ContactOpen : true})
      break;
    default:
      return;
  }
};

CloseModal = name => {
  switch(name){
    case 'B_aboutMeOpen':
      this.setState({ B_aboutMeOpen: false });
      break;
    case 'B_ProjectsOpen':
      this.setState({B_ProjectsOpen : false})
      break;
    case 'B_ContactOpen':
      this.setState({B_ContactOpen : false})
      break;
    default:
      return;
  }
};


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
                <div className="change-text">{this.state.words[this.state.selected]}</div>
                <div className="logos">
                    <a href="https://www.linkedin.com/in/drew-johnson-99ab34171/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="http://www.github.com/Drewsup123" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
            </div>
            <hr style={{width:'30%', height:1}}/>
            <hr className="vertical-line"/>
            <ul className="tabs" >
              <li onClick={()=>this.OpenModal('B_aboutMeOpen')}><AnimatedBtn title="About Me"/></li>
              <li onClick={()=>this.OpenModal('B_ProjectsOpen')}><AnimatedBtn title="Projects"/></li>
              <li onClick={()=>this.OpenModal('B_ContactOpen')}><AnimatedBtn title="Contact"/></li>
            </ul>
        </header>

        {/* About Me Modal */}
        <Modal modalId="about-me-container" open={this.state.B_aboutMeOpen} onClose={()=>this.CloseModal('B_aboutMeOpen')} center>
          <AboutMe />
        </Modal>

        <Modal modalId="projects-container" open={this.state.B_ProjectsOpen} onClose={()=>this.CloseModal('B_ProjectsOpen')} center>
          <Projects />
        </Modal>

        
        <Modal modalId="contact-container" open={this.state.B_ContactOpen} onClose={()=>this.CloseModal('B_ContactOpen')} center>
          <Contact />
        </Modal>

      </div>
    );
  }
}

export default App;

        // <div className="sections">
        //   <Element name="test"/>
        //   <AboutMe />
        //   {/* <Logos /> */}
        //   {/* <Projects /> */}
        //   <h1 id="project-header">Projects</h1>
        //   <Projects />
        // </div> 
