function ProgressBar(value) {
    return (
        <>
            <div className="progress" style={{height: "4vh", width:"75%"}}>
                <div className="progress-bar bg-success" role="progressbar" style={value.progressbarstyle} aria-valuemin="0" aria-valuemax="100">{value.progress}</div>
            </div>
        </>
    )
}
export default ProgressBar