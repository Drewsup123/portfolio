import React from 'react';
import "./hexagon.css";

class Hexagon extends React.Component{
    constructor(){
        super();
        this.state = {
            hoverClass : 'hidden'
        }
    }
    render(){
        return(
            <section class="section section-gray no-padding spacing" >
                <div 
                    className="box2 projects" 
                    onMouseEnter={()=>this.setState({hoverClass : ''})}
                    onMouseLeave={()=>this.setState({hoverClass : 'hidden'})}
                >
                    <div className="box-content">
                        <p>Lambda Notes</p>
                        <hr />

                        <div className = {this.state.hoverClass}>
                            <p>React, Node.JS, Express.JS</p>
                            <a 
                                href="https://github.com/Drewsup123/front-end-project-week" 
                                target="_blank">
                                <i className='fab fa-github project-icon'></i>
                                <i className="fas fa-globe project-icon"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div 
                    className="box2 projects2" 
                    onMouseEnter={()=>this.setState({hoverClass : ''})}
                    onMouseLeave={()=>this.setState({hoverClass : 'hidden'})}
                >
                    <div className="box-content">
                        <p>S&J Architects</p>
                        <hr />

                        <div className = {this.state.hoverClass}>
                            <p>HTML, CSS/LESS, JavaScript</p>
                            <a 
                                href="https://github.com/Drewsup123/front-end-project-week" 
                                target="_blank">
                                <i className='fab fa-github project-icon'></i>
                                <i className="fas fa-globe project-icon"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            
        );
    }
}

export default Hexagon;