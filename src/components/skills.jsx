import ProgressBar from "./progressbar"
function Skills() {
    return (
        <>
            <div className="skills-content">
                <center><h2>My Skills</h2></center><br/>
                <img src="./images/html.png" height="40"/><img src="./images/css.png" height="40"/>&nbsp;&nbsp; HTML,CSS
                <ProgressBar
                    progressbarstyle={{ width: "90%" }}
                    progress="90%"
                />
                <img src="./images/php.png" height="40" style={{borderRadius: "50%"}}/>&nbsp;&nbsp; PHP
                <ProgressBar
                    progressbarstyle={{ width: "65%" }}
                    progress="65%"
                />
                <img src="./images/mysql.png" height="50"/>&nbsp;&nbsp; MYSQL
                <ProgressBar
                    progressbarstyle={{ width: "85%" }}
                    progress="85%"
                />
                <img src="./images/java.png" height="40"/>&nbsp;&nbsp; Java
                <ProgressBar
                    progressbarstyle={{ width: "78%" }}
                    progress="78%"
                />
                
                <img src="./images/react.png" height="40"/>&nbsp;&nbsp; React JS
                <ProgressBar
                    progressbarstyle={{ width: "60%" }}
                    progress="60%"
                />
                <img src="./images/python.png" height="40"/>&nbsp;&nbsp; Python
                <ProgressBar
                    progressbarstyle={{ width: "80%" }}
                    progress="80%"
                />
            </div>
        </>
    )
}
export default Skills