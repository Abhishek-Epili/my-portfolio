function ProgressBar(value) {
    return (
        <>
            <div className="progress" style={{height: "2.5vh"}}>
                <div className="progress-bar progress-bar-striped" role="progressbar" style={value.progressbarstyle} aria-valuemin="0" aria-valuemax="100">{value.progress}</div>
            </div>
        </>
    )
}
export default ProgressBar