import Img from "./img"

function About() {
    return (
        <div id="about-section" className="about-content">
        <div className="grid-container">
           
                <div>
                <center><h1>About Me</h1></center>
                <br />
                I am a Full Stack Developer with the knowledge of front end technologies like HTML, CSS, ReactJS, Javascript.<br />
                On the other hand, I also have experience in working with back end technologies like PHP, Java, MySQL, Node.JS.<br />
                I have worked with .NET Framework, too.<br />
                Currently, I am looking for internships in Web and Java Development.
                </div>
            <Img />
            <div style={{gridColumnStart: "1", gridColumnEnd: "2"}}>
                
                <br /> 
                <h3>Languages I Speak</h3>
                Hindi, English, Oriya, Marathi
                <br />
                <br />
                <h3>Hobbies</h3>

                My hobbies are playing outdoor & online games, listening to music, hanging out with friends.
            </div>
            </div>
        </div>
    )
}
export default About