import '../index.css'
import Img from './img'
function Home() {
    return (
        <div className='grid-container home-page'>
            <div>
                <div className='home-text1'>
                Hi, this is Abhishek Epili! And this is my portfolio website.
                </div><br/>
                <div className="home-text2">
                    I am a Student who is passionate for full stack development.
                </div>
            </div>
            <div>
                <Img />
            </div>
            <div className='home-btn'>
                <a href='../Abhishek Epili.pdf' download><button className='resume-button'>Download Resume</button></a>
            </div>
        </div>
    )
}
export default Home