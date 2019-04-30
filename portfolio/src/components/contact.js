import React from 'react';

class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "",
            email : "",
            message: "",
        }
    }

    onChangeHandler = e => {
        this.setState({...this.state, [e.target.name] : e.target.value})
        console.log(this.state)
    }

    sendEmail = e => {
        e.preventDefault();
        if(!this.state.name.length || !this.state.email.length || !this.state.message.length){
            alert("Please fill out all fields")
            return;
        }else{
            window.open(
                `mailto:drewsup123c@gmail.com?subject=Inquiry&body=Email:${this.state.email}
                \r\nName:${this.state.name}
                \n\r\nMessage:${this.state.message}`
                );
        }
    }

    render(){
        return(
            <section className="contact">
                <h1>Get in Touch</h1>
                <form>
                    <input onChange={this.onChangeHandler} name="name" id="name" type="text" placeholder="Name"/>
                    <input onChange={this.onChangeHandler} name="email" id="email" type="text" placeholder="E-mail"/>
                    <textarea onChange={this.onChangeHandler} name="message" id="message" type="text" placeholder="Message"/>
                    <input onClick={this.sendEmail} onChange={this.onChangeHandler} id="submit-message" type="submit" />
                </form>
            </section>
        )
    }
}

export default Contact;