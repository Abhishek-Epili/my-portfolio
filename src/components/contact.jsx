
function Contact() {
    return (
        <div className="grid-container">


            <div className="contact-details" style={{ fontSize: "100%" }}>
                <h2>Contact Me</h2>
                <br />
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrkWHvmFWhRnTrMJPswZRnHfSRrrLfwfhbCGtCGwFQxTklntJKvmWPvnfgvqmhdzRwMkGq" target="_blank"  ><img src="/images/gmail.png" className="social-img"/></a>&nbsp;&nbsp;&nbsp; epiliabhishek@gmail.com
                <br /><br />
                <a href="https://web.whatsapp.com/" target="_blank" ><img src="/images/whatsapp.png" className="social-img round" /></a>&nbsp;&nbsp;&nbsp;+91 9082419895
            </div>
            <div style={{width: "100%"}}>
                <img className="gif" src="/images/hello.gif" />
                </div>
            <div className="social-links" style={{gridColumnStart: 1,gridColumnEnd: 3}}>
                <h2>Social Links</h2><br/>
                <a href="https://github.com/Abhishek-Epili/" target="_blank" ><img src="/images/github.png"  className="social-img round" /></a>
                <a href="https://www.facebook.com/abhishek.epili" target="_blank" ><img src="/images/fb.jpg"  className="social-img round" /></a>
                <a href="https://www.linkedin.com/in/abhishek-epili/" target="_blank" ><img src="/images/linkedin.png"  className="social-img" /></a>
                <a href="https://www.instagram.com/abhishekepili/" target="_blank" ><img src="/images/insta.jpg"  className="social-img round" /></a>
                <br/><br/>
                
            </div>
            <div style={{gridColumnStart: 1,gridColumnEnd: 3}}>
            <h3 >Make sure to give a feedback about my portfolio!</h3>
            </div>
        </div>
    )
}
export default Contact