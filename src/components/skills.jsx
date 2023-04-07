import ProgressBar from "./progressbar"
function Skills() {
    return (
        <>
            <div className="skills-container">
                <center><h2>My Skills</h2></center>
                <div >
                    <div className="skills-text">
                        <img src="/images/html.png" height="40" /><img src="/images/css.png" height="40" />&nbsp;&nbsp; HTML,CSS
                    </div>
                    
                    <div className="progressbar"><ProgressBar
                        progressbarstyle={{ width: "90%" }}
                        progress="90%"
                    /></div>
                </div>
                <div>
                    <div className="skills-text">
                        <img src="/images/php.png" height="40" style={{ borderRadius: "50%" }} />&nbsp;&nbsp; PHP
                    </div>
                    <div className="progressbar">
                    <ProgressBar
                        progressbarstyle={{ width: "65%" }}
                        progress="65%"
                    /></div>
                </div>
                <div >
                    <div className="skills-text">
                        <img src="/images/mysql.png" height="50" />&nbsp;&nbsp; MYSQL
                    </div>
                    <div className="progressbar">
                    <ProgressBar
                        progressbarstyle={{ width: "85%" }}
                        progress="85%"
                    /></div>
                </div>
                <div >
                    <div className="skills-text">
                        <img src="/images/java.png" height="40" />&nbsp;&nbsp; Java
                    </div>
                    <div className="progressbar">
                    <ProgressBar
                        progressbarstyle={{ width: "78%" }}
                        progress="78%"
                    /></div>
                </div>
                <div >
                    <div className="skills-text">
                        <img src="/images/react.png" height="40" />&nbsp;&nbsp; React JS
                    </div>
                    <div className="progressbar">
                    <ProgressBar
                        progressbarstyle={{ width: "60%" }}
                        progress="60%"
                    /></div>
                </div>
                <div >
                    <div className="skills-text">
                        <img src="/images/python.png" height="40" />&nbsp;&nbsp; Python
                    </div>
                    <div className="progressbar">
                    <ProgressBar
                        progressbarstyle={{ width: "80%" }}
                        progress="80%"
                    /></div>
                </div>
            </div >
        </>
    )
}
export default Skills