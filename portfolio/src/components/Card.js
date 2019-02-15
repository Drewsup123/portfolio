import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div onClick={()=>window.open(`${this.props.url}`, '_blank')} className="project-card">
                <h3>{this.props.title}</h3>
                <p>Description: {this.props.description}</p>
                <img src={this.props.img} />
            </div>
        )
    }
}

export default Card;