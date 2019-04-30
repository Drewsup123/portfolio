import React from 'react';
import "./hexagon.css";

class Projects extends React.Component{
    constructor(){
        super();
        this.state = {
            hoverClass : 'hidden',
            hoverClass2 : 'hidden',
            hoverClass3 : 'hidden',
        }
    }
    render(){
        return(
            <div className="project-section" >
                <div 
                    className="box2 projects projectsH" 
                    onMouseEnter={()=>this.setState({hoverClass : ''})}
                    onMouseLeave={()=>this.setState({hoverClass : 'hidden'})}
                >
                    <div className="box-content">
                        <p className="card-title">Lambda Notes</p>
                        <hr />
                        <p className="card-desc">Lambda Notes is a note taking app that utilizes front end and back end practices</p>

                        <div className = {this.state.hoverClass}>
                            <p className="project-stack">React, Node.JS, Express.JS</p>
                            <a 
                                href="https://github.com/Drewsup123/front-end-project-week" 
                                target="_blank" rel="noopener noreferrer">
                                <i className='fab fa-github project-icon'></i>
                                <i className="fas fa-globe project-icon"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div 
                    className="box2 projects2 projectsH" 
                    onMouseEnter={()=>this.setState({hoverClass2 : ''})}
                    onMouseLeave={()=>this.setState({hoverClass2 : 'hidden'})}
                >
                    <div className="box-content">
                        <p className="card-title">S&J Architects</p>
                        <hr />
                        <p className="card-desc">A simple webpage with full responsiveness and pure JavaScript functionality</p>
                        <div className = {this.state.hoverClass2}>
                            <p className="project-stack">HTML, CSS/LESS, JavaScript</p>
                            <a 
                                href="https://github.com/Drewsup123/front-end-project-week" 
                                target="_blank" rel="noopener noreferrer">
                                <i className='fab fa-github project-icon'></i>
                                <i className="fas fa-globe project-icon"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <a 
                    href="https://learned-app.now.sh/"
                    target="_blank"
                    className="box2 projects3 projectsH" 
                    onMouseEnter={()=>this.setState({hoverClass3 : ''})}
                    onMouseLeave={()=>this.setState({hoverClass3 : 'hidden'})}
                >
                    <div className="box-content">
                        <p className="card-title">Erudition</p>
                        <hr />
                        <p className="card-desc">Erudition is a social learning network that allows users to save and share articles
                        and courses that have read or taken</p>
                        <div className = {this.state.hoverClass3}>
                            <p className="project-stack">React, React Context/Hooks, NextJS, Firebase, NodeJs, Express</p>
                            <a 
                                href="https://github.com/labs11-learned-1/labs11-learned1-FE" 
                                target="_blank" rel="noopener noreferrer">
                                <i className='fab fa-github project-icon'></i>
                            </a>

                            <a 
                                href="https://learned-app.now.sh/" 
                                target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-globe project-icon"></i>
                            </a>
                        </div>

                    </div>
                </a>
            </div>
            
        );
    }
}

export default Projects;