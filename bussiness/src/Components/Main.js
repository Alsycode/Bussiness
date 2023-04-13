import React from "react";
export default function Main() {
    return(
        <div className="main--container">
            <h4 className="main--heading main--content">
                Bussiness Card
            </h4>
            <h4 className="main--h4--one main--content">
                Frontend Developer
            </h4>
            <span className="main--span--two main--contentspan">Website Link Channel</span>
            
            <div className="btn--class">
                <a href="shyamalfred@gmail.com"><button className="main--btn btn--email">Email</button></a>
            <a href="linkedin.com/in/alfred-shyam-066a6324a"><button className="main--btn btn--linkedin">Linkedin</button></a>
            </div>
            
            <div className="main--about--interest">
                <h3>About</h3>
                <p>
                I specialize in creating modern and user-friendly websites and applications. My skills include HTML, CSS, JavaScript, React, and Angular, and I am always eager to learn new technologies and tools.

I have a keen eye for design and strive to create interfaces that are not only functional but also aesthetically pleasing. I am passionate about creating accessible and responsive websites that provide the best possible user experience.</p>
                <h3>Interests</h3>
                <p>In my free time, I enjoy attending meetups and conferences to stay up to date with the latest trends and best practices in front-end development. I am also an avid blogger and enjoy sharing my knowledge and insights with the community.

If you're looking for a front-end developer who can bring your vision to life and create a seamless user experience, don't hesitate to get in touch. Let's work together to build something great.</p>
            </div>
        </div>
    )
}