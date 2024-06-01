import '../index.css'
import Img from './img'

import About from './about'
import Education from './education'
import Skills from './skills'
import Contact from './contact'

function Home() {
    return (
        <div className='home-page'>
            <div className="home-container">
            <div className='home-text-container'>
                <div className='home-text1'>
                Hi, this is Abhishek Epili! And this is my portfolio website.
                </div><br/><br/><br/>
                <div className="home-text2">
                    I am a Student who is passionate for full stack development.
                </div>
            </div>
            <div className='home-btn'><a href='../Abhishek Epili Resume.pdf' download><button className='resume-button'>Download My Resume!</button></a></div>
            </div>
            
        </div>
    )
}
export default Home