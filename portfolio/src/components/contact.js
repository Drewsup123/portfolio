import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <section className="contact">
                <h1>Contact</h1>
                <form>
                    <input id="name" type="text" placeholder="Name"/>
                    <input id="email" type="text" placeholder="E-mail"/>
                    <textarea id="message" type="text" placeholder="Message"/>
                    <input type="submit" />
                </form>
            </section>
        )
    }
}

export default Contact;