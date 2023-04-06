
function Contact() {
    return (
        <div className="grid-container">


            <div className="contact-details" style={{ fontSize: "100%" }}>
                <h2>Connect Me</h2>
                <br />
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrkWHvmFWhRnTrMJPswZRnHfSRrrLfwfhbCGtCGwFQxTklntJKvmWPvnfgvqmhdzRwMkGq" target="_blank"  ><img src="./images/gmail.png" className="social-img" height="40" /></a>&nbsp;&nbsp;&nbsp; epiliabhishek@gmail.com
                <br /><br />
                <a href="https://web.whatsapp.com/" target="_blank" ><img src="./images/whatsapp.png" height="60" className="social-img round" /></a>&nbsp;&nbsp;&nbsp;+91 9082419895
            </div>
            <div>
                <img className="gif" src="./images/hello.gif" />
            </div>
            <div className="social-links" style={{gridColumnStart: 1,gridColumnEnd: 3}}>
                <h2>Social Links</h2><br/>
                <a href="https://github.com/Abhishek-Epili/" target="_blank" ><img src="./images/github.png" height="60" className="social-img round" /></a>
                <a href="https://www.facebook.com/abhishek.epili" target="_blank" ><img src="./images/fb.jpg" height="60" className="social-img round" /></a>
                <a href="https://www.linkedin.com/in/abhishek-epili/" target="_blank" ><img src="./images/linkedin.png" height="60" className="social-img" /></a>
                <a href="https://www.instagram.com/abhishekepili/" target="_blank" ><img src="./images/insta.jpg" height="60" className="social-img round" /></a>
                <br/><br/>
                
            </div>
            <div style={{gridColumnStart: 1,gridColumnEnd: 3}}>
            <h3 >Make sure to give a feedback about my portfolio!</h3>
            </div>
        </div>
    )
}
export default Contact