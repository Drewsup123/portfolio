import React from 'react';
import { Link } from "react-scroll";

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="footer-content">
                    <h3>Email : drewsup123c@gmail.com</h3>
                    <h3>Github: http://github.com/Drewsup123</h3>
                    <h3>LinkedIn: https://www.linkedin.com/in/drew-johnson-99ab34171/</h3>
                    <a href="https://resume.creddle.io/resume/hjhco45g57w" target="_blank" rel="noopener noreferrer">Resume</a>
                    <Link to="header" smooth={true}>
                        <i className="fa fa-chevron-up"></i>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Footer;