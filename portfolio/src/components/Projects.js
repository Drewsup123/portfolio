import React from "react";
import "./hexagon.css";
import ProjectCard from "./ProjectCard";

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            hoverClass: "hidden",
            hoverClass2: "hidden",
            hoverClass3: "hidden",
            hoverClass4: "hidden",
            hoverClass5: "hidden",
        };
    }
    render() {
        return (
            <div className="project-section">
                <ProjectCard
                    href="https://www.decentralizeddrive.com/"
                    title="Decentralized Drive"
                    description="A decentralized Google Drive like application that allows users to create and import documents, images, pdfs, and JavaScript files"
                    stack="React, Redux, Material-UI, Blockstack"
                    githubLink="https://github.com/Drewsup123/BlockStack-App"
                    websiteLink="https://www.decentralizeddrive.com/"
                    backgroundUrl="https://i.imgur.com/S7OmElZ.png"
                />
                <ProjectCard
                    href="https://swooblz.netlify.com/"
                    title="Swooblz"
                    description="A Slack clone with chat groups and private messaging functionality"
                    stack="React, Redux, Firebase Realtime Database, SemanticUI, CSS"
                    githubLink="https://github.com/Drewsup123/Swooblz-official"
                    websiteLink="https://swooblz.netlify.com/"
                    backgroundUrl="https://i.ibb.co/QQHk5q5/2019-05-07.png"
                />
                <ProjectCard
                    href="https://learned-app.now.sh/"
                    title="Erudition"
                    description="Erudition is a social learning network that allows users to save and share articles and courses that have read or taken"
                    stack="React, React Context/Hooks, NextJS, Firebase, NodeJs, Express"
                    githubLink="https://github.com/labs11-learned-1/labs11-learned1-FE"
                    websiteLink="https://learned-app.now.sh/"
                    backgroundUrl="https://i.ibb.co/wphPM0K/Erudition-Site2.jpg"
                />
                <ProjectCard
                    href="https://s-and-j-architects.netlify.com/index.html"
                    title="S&J Architects"
                    description="A simple webpage with full responsiveness and pure JavaScript functionality"
                    stack="HTML, CSS/LESS, JavaScript"
                    githubLink="https://github.com/Drewsup123/front-end-project-week"
                    websiteLink="https://s-and-j-architects.netlify.com/index.html"
                    backgroundUrl="https://i.ibb.co/x2hG9Z5/sandj.png"
                />
                {/* <a
                    href="https://5c847bf7921b68cdd3d10dc2--drews-note-taking-react-app.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
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
                            </a>
                            <a 
                            rel="noopener noreferrer"
                            href="https://5c847bf7921b68cdd3d10dc2--drews-note-taking-react-app.netlify.com/"
                            target="_blank">
                                <i className="fas fa-globe project-icon"></i>
                            </a>
                            
                        </div>

                    </div>
                </a> */}
            </div>
        );
    }
}

export default Projects;
