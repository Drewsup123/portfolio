import React, { Component } from 'react';
// Component Imports
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { Element } from "react-scroll";
import AnimatedBtn from './components/AnimatedBtn';
import Modal from 'react-responsive-modal';
import Contact from './components/contact';
import { motion } from "framer-motion";

class App extends Component {
  constructor(){
    super();
    this.state = {
        words : ['Full Stack Web Developer', 'Software Engineer', 'Programmer', 'Designer'],
        selected : 0,
        B_aboutMeOpen : false,
        B_ProjectsOpen : false,
        B_ContactOpen : false,
        testOpen : false,
        testClosing : false,
        B_aboutMeClosing : false,
        B_ProjectsClosing : false,
        B_ContactClosing : false,
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

testClickHandler = (e, modalId, closingId) => {
  if(e.target.id === "p"){
    this.setState({[closingId] : true})
    setTimeout(() => {
      this.setState({[modalId] : false})
      this.setState({[closingId] : false})
    }, 2000);
  }
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
                <motion.div
                  animate={{
                    scale: [0,1],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    duration:5,
                  }}
                >
                  <h1>DREW <span id="last-name">JOHNSON</span></h1>
                </motion.div>
                <div className="change-text">{this.state.words[this.state.selected]}</div>
                <div className="logos">
                    <a href="https://www.linkedin.com/in/drew-johnson-99ab34171/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="http://www.github.com/Drewsup123" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
            </div>
            <motion.hr animate={{width : ["0%","30%"], duration:5}} />
            <motion.hr className="vertical-line" animate={{height : [1,55], duration:5}} />
            <ul className="tabs" >
              <li onClick={()=>{this.OpenModal("B_aboutMeOpen")}}><AnimatedBtn title="About Me" /></li>
              <li onClick={()=>this.OpenModal('B_ProjectsOpen')}><AnimatedBtn title="Projects"/></li>
              <li onClick={()=>this.OpenModal('B_ContactOpen')}><AnimatedBtn title="Contact"/></li>
            </ul>
        </header>

        {/* About Me Modal */}
          {/* <Modal modalId="about-me-container" open={this.state.B_aboutMeOpen} onClose={()=>this.CloseModal('B_aboutMeOpen')} center>
            <AboutMe />
          </Modal> */}

        {/* <Modal modalId="projects-container" open={this.state.B_ProjectsOpen} onClose={()=>this.CloseModal('B_ProjectsOpen')} center>
          <Projects />
        </Modal> */}

        
        {/* <Modal modalId="contact-container" open={this.state.B_ContactOpen} onClose={()=>this.CloseModal('B_ContactOpen')} center>
          <Contact />
        </Modal> */}

        {/* About Me Modal */}
        {
          this.state.B_aboutMeOpen 
          ?
          <div
            id="p"
            style={{
              position : "fixed",
              top:"0%", 
              left:"0%",
              width:"100vw", 
              height:"100vh",
              '@media (max-height: 800px)' : {
                
              }
            }} 
            onClick={e => this.testClickHandler(e, "B_aboutMeOpen", "B_aboutMeClosing")}
          >
            <motion.div
              id="about-me-container"
              style={{width : "40%", position : "fixed", top:"30%", left:"30%", right:"30%", bottom : "30%"}}
              animate={
                this.state.B_aboutMeClosing 
                ?
                {
                  scale: [1, .8, .8, .2, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "100%"],
                  duration : 2
                }
                :
                {
                scale: [1, 1.2, 1.2, 1, 1],
                borderRadius: ["20%", "20%", "30%", "30%", "5%"],
                }
              }
              
            >
              <AboutMe />
            </motion.div>
          </div>
          :
          null
        }

        {/* Projects Modal */}
        {
          this.state.B_ProjectsOpen
          ?
          <div
            id="p"
            style={{position : "fixed",top:"0%", left:"0%",width:"100vw", height:"100vh",}} 
            onClick={e => this.testClickHandler(e, "B_ProjectsOpen", "B_ProjectsClosing")}
          >
            <motion.div
              id="projects-container"
              style={{
                overflowY:"scroll", 
                position : "fixed", 
                top:"10%", 
                left:"17.5%", 
                right:"17.5%", 
                bottom : "10%",
              }}
              animate={
                this.state.B_ProjectsClosing 
                ?
                {
                  scale: [1, .8, .8, .2, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "100%"],
                  duration : 2
                }
                :
                {
                scale: [1, 1.2, 1.2, 1, 1],
                borderRadius: ["20%", "20%", "30%", "30%", "5%"],
                }
              }
              
            >
              <Projects />
            </motion.div>
          </div>
          :
          null
        }

        {/* Contact Modal */}
        {
          this.state.B_ContactOpen
          ?
          <div
            id="p"
            style={{position : "fixed",top:"0%", left:"0%",width:"100vw", height:"100vh",}} 
            onClick={e => this.testClickHandler(e, "B_ContactOpen", "B_ContactClosing")}
          >
            <motion.div
              id="contact-container"
              style={{position : "fixed", top:"35%", left:"30%", right:"30%", bottom : "31%"}}
              animate={
                this.state.B_ContactClosing 
                ?
                {
                  scale: [1, .8, .8, .2, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "100%"],
                  duration : 2
                }
                :
                {
                scale: [1, 1.2, 1.2, 1, 1],
                borderRadius: ["20%", "20%", "30%", "30%", "5%"],
                }
              }
              
            >
              <Contact />
            </motion.div>
          </div>
          :
          null
        }

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
