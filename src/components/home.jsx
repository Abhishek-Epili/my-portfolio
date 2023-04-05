import '../index.css'
import Img from './img'
function Home() {
    return (
        <>
            <div className="home-line-1">
                Hi, this is Abhishek Epili! And this is my portfolio website.<br />
            </div>
            
            <div className="home-line-2">
                I am a Student who is passionate for full stack development.
            </div>
            <Img/>
                <a href='../Abhishek Epili.pdf' download><button className='resume-button'>Download Resume</button></a>
        </>
    )
}
export default Home