import React from 'react';

class AboutMe extends React.Component{
    render(){
        return(
            <section className="about-me">
                <h1>About Me</h1>
                <hr />
                <p>
                    My name is Drew Johnson I am a passionate developer from the beautiful state of
                    Montana. I love learning new things whether it be a new language or library and always
                    looking for new ways to improve my code<br />
                    I am a graduate from Lambda School, a school/bootcamp well known for teaching great developers,
                    and I'm very excited to show my skillset in the workplace.
                </p>
            </section>
        )
    }
}

export default AboutMe;