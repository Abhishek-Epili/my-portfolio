
function Contact() {
    return (
        <><center><h2>Contact Me</h2></center>
        <div id="contact-section" className="contact-container">
            <div className="contact-details">
                
                <br />
                <img src="/images/gmail.png" height="30" className="social-img"/>&nbsp;&nbsp;&nbsp; epiliabhishek@gmail.com<br/><br />
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrkWHvmFWhRnTrMJPswZRnHfSRrrLfwfhbCGtCGwFQxTklntJKvmWPvnfgvqmhdzRwMkGq" target="_blank"  ><button className="mail-btn">Wanna mail me? Click Here</button></a>
                <br /><br />
                <a href="https://web.whatsapp.com/" target="_blank" ><img src="/images/whatsapp.png" height="40" className="social-img round" /></a>&nbsp;&nbsp;&nbsp;+91 9082419895
            </div>
            <div className="gif-container">
            <br/>
                <img className="gif" src="/images/hello.gif" />
                
            </div>
                
            <div className="social-links"  >
            <br/>
                <h2>Social Links</h2><br/>
                <a href="https://github.com/Abhishek-Epili/" target="_blank" ><img src="/images/github.png"  height="40" className="social-img round social-sep" /></a>
                <a href="https://www.facebook.com/abhishek.epili" target="_blank" ><img src="/images/fb.jpg"  height="40" className="social-img round social-sep" /></a>
                <a href="https://www.linkedin.com/in/abhishek-epili/" target="_blank" ><img src="/images/linkedin.png"  height="40" className="social-img social-sep" /></a>
                <a href="https://www.instagram.com/abhishekepili/" target="_blank" ><img src="/images/insta.jpg"  height="40" className="social-img round social-sep" /></a>
                <br/><br/>
                
            </div>
            <div style={{gridColumnStart: 1,gridColumnEnd: 3}}>
            <h3 >Make sure to give a feedback about my portfolio!</h3>
            </div>
        </div>
        </>
    )
}
export default Contact