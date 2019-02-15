import React from 'react';
import Card from './Card'

class Projects extends React.Component{
    render(){
        return(
            <section className="projects">
                <h1>Projects</h1>
                <Card 
                    title="Lambda Notes" 
                    description="A note app with front-end React features and backend made with Express and SQLite3 for the database"
                    img="https://i.ibb.co/YfPyjd2/Lambda-Notes.png"
                    url="http://www.google.com"
                />
            </section>
        )
    }
}

export default Projects;