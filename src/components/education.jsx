import Project from "./projects"

function Education() {
    return (
        <>
            <div id="eduction-section" className="education-content">
                <h3>Education</h3>
                Currently, I am Student pursuing the course Bsc Computer Science in <a href="https://www.ruiacollege.edu/" className="college-link" target="_blank">Ramnarain Ruia College</a> in Second Year.
            </div>
            <div className="projects-content">
                <h3>My Projects</h3>
                <br />
                <div className="row">
                    <div className="col">
                        <Project
                            title="Fake Review Detection"
                            text="This app automatically detects fake or suspicious reviews submitted by users on a web
                        platform.  The app integrates with the platform's APIs to
                        provide real-time feedback to users and offers an intuitive admin interface for efficient
                        review management."
                            tech1="MERN Stack"
                            link="https://github.com/Abhishek-Epili/eTechHub"
                        />
                    </div>
                    <div className="col">
                        <Project
                            title="Transport Company Project" t
                            text="A project which has two user interfaces, one for visitor and other for admin where visitor can book tickets and admin can see details of all tickets booked."
                            tech1="Front-End: HTML, CSS, Javascript"
                            tech2="Back-End: Servlet"
                            link="https://github.com/Abhishek-Epili/Transport-Company-Project"
                        />
                    </div>
                    <div className="col">
                        <Project
                            title="Blood Bank Project"
                            text="A web application for blood bank having two user interfaces, one for hospital and other for visitor where visitor can request blood sample from a hospital and hospital can see all requests to them."
                            tech1="Front-End: HTML, CSS, Javascript"
                            tech2="Back-End: PHP, MySQL"
                            link="https://github.com/Abhishek-Epili/blood_bank_project"
                        />
                    </div>

                </div>

                <div className="row">
                    <div className="col">
                        <Project
                            title="Quiz"
                            text="A java swing application where user can login and play a quiz of 10 questions where it will show the score of correct answer to user and insert it in database."
                            tech1="Java Swing"
                            link="https://github.com/Abhishek-Epili/online-quiz"
                        />
                    </div>
                    <div className="col">
                        <Project
                            title="Tours & Guides Project"
                            text="My first React JS project, which is tours & guides website for Maharashtra which shows the top 10 cities and on clicking navigates to the best travellers/hotels in that city to travel/stay."
                            tech1="Front-End: ReactJS"
                            link="https://github.com/Abhishek-Epili/reactjs-proj"
                        />
                    </div>
                    <div className="col">
                        <Project
                            title="Bus Ticket Booking Project"
                            text="A bus ticket booking project in java swing where user has to enter his details and a bus ticket will be generated after booking the ticket with their details in it."
                            tech1="Java Swing"
                            link="https://github.com/Abhishek-Epili/Bus-Ticket-Booking-Project"
                        />
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <Project
                            title="Covid Precautions Animation Clip"
                            text="A python project which animates/creates a covid precaution poster using the turtle module."
                            tech1="Python Turtle Module"
                            link="https://github.com/Abhishek-Epili/animation-clip-using-python"
                        />
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}
export default Education