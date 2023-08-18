import React, { useState } from "react";
const ProjectCard = (props) => {
    const {
        href,
        title,
        description,
        stack,
        githubLink,
        websiteLink,
        backgroundUrl,
    } = props;
    const [hovering, setHovering] = useState(false);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="box2 projectsH"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
                background: `url("${backgroundUrl}")`,
            }}
        >
            <div className="box-content">
                <div className="card-details">
                    <p className="card-title">{title}</p>
                    <hr />
                    <p className="card-desc">{description}</p>
                </div>
                <div className={hovering ? "" : "hidden"}>
                    <p className="project-stack">{stack}</p>
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginRight: 10 }}
                        >
                            <i className="fab fa-github project-icon" />
                        </a>
                    )}
                    {websiteLink && (
                        <a
                            rel="noopener noreferrer"
                            href={websiteLink}
                            target="_blank"
                        >
                            <i className="fas fa-globe project-icon" />
                        </a>
                    )}
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
