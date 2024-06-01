function Project(content) {
    return(
    <>
        <div className="card" style={{width: "20em",height: "100%"}}>
            <div className="card-body">
                <h5 className="card-title">{content.title}</h5>
                <p className="card-text">{content.text}<br/><br/>
                <b>Technologies Used:</b> <br/>{content.tech1}<br/>{content.tech2}</p>
                <a href={content.link} className="card-link">Go to Project</a>
            </div>
        </div>
    </>
    )
}
export default Project