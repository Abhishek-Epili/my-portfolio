import '../index.css'
import Img from './img'
function Home() {
    return (
        <div className='home-page'>
            <div className='grid-container'>
            <div className='home-text-container'>
                <div className='home-text1'>
                Hi, this is Abhishek Epili! And this is my portfolio website.
                </div><br/>
                <div className="home-text2">
                    I am a Student who is passionate for full stack development.
                </div>
            </div>
                <Img />
            <div className='home-btn'>
                <br/>
                <a href='../Abhishek Epili.pdf' download><button className='resume-button'>Download Resume</button></a>
            </div>
            </div>
        </div>
    )
}
export default Home