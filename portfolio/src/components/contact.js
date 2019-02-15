import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <section className="contact">
                <h1>Contact</h1>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Message"/>
                    <input type="submit" />
                </form>
            </section>
        )
    }
}

export default Contact;