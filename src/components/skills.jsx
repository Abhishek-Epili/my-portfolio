import ProgressBar from "./progressbar"
function Skills() {
    return (
        <>
            <div className="skills-container">
                <center><h2>My Skills</h2></center>
                <div >
                <img src="./images/html.png" height="40"/><img src="./images/css.png" height="40"/>&nbsp;&nbsp; HTML,CSS<br/>
                <ProgressBar
                    progressbarstyle={{ width: "90%" }}
                    progress="90%"
                />
                </div>
                <div>
                <img src="./images/php.png" height="40" style={{borderRadius: "50%"}}/>&nbsp;&nbsp; PHP<br/>
                <ProgressBar
                    progressbarstyle={{ width: "65%" }}
                    progress="65%"
                />
                </div>
                <div >
                <img src="./images/mysql.png" height="50"/>&nbsp;&nbsp; MYSQL<br/>
                <ProgressBar
                    progressbarstyle={{ width: "85%" }}
                    progress="85%"
                />
                </div>
                <div >
                <img src="./images/java.png" height="40"/>&nbsp;&nbsp; Java<br/>
                <ProgressBar
                    progressbarstyle={{ width: "78%" }}
                    progress="78%"
                />
                </div>
                <div >
                <img src="./images/react.png" height="40"/>&nbsp;&nbsp; React JS<br/>
                <ProgressBar
                    progressbarstyle={{ width: "60%" }}
                    progress="60%"
                />
                </div>
                <div >
                <img src="./images/python.png" height="40"/>&nbsp;&nbsp; Python<br/>
                <ProgressBar
                    progressbarstyle={{ width: "80%" }}
                    progress="80%"
                />
                </div>
            </div>
        </>
    )
}
export default Skills