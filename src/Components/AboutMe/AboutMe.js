import { faFacebook, faFacebookF, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBuildingUser, faCalendar, faCoffee, faEnvelope, faFaceGrin, faPeopleArrows, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./AboutMe.css"
const AboutMe = () => {
    return (
        <div style={{ color: "white", textAlign: "center" }} id="about">
            <h1 className="fw-bold nameIntro" >Who  I am? <span className='myName'>Sabbir Alam</span></h1>
            <h5>I'M A PASSIONATE WEB DEVELOPER</h5>
            <div className="d-flex gap-3 justify-content-center">
                <a href="https://www.facebook.com/sabbir1144" target="blank">
                    <FontAwesomeIcon icon={faFacebook} className="fs-3 btn btn-outline-primary rounded rounded-circle p-2"></FontAwesomeIcon>
                </a>
                <a href="https://www.facebook.com/sabbir1144" target="blank">
                    <FontAwesomeIcon icon={faGithub} className="fs-3 btn btn-outline-primary rounded rounded-circle p-2"></FontAwesomeIcon>
                </a>
                <a href="https://www.facebook.com/sabbir1144" target="blank">
                    <FontAwesomeIcon icon={faLinkedinIn} className="fs-3 btn btn-outline-primary rounded rounded-circle p-2"></FontAwesomeIcon>
                </a>
            </div>
            <div className='responsive-width mx-auto my-4'>
                <p>
                   Passionate about web development.Curious about learning new technology.Trying to acquire more knowledge.I know the value of time.So trying to utilize the time.
                 <p className='mt-4'><blockquote>Stay Hungry, Stay Foolish</blockquote> </p> 
                   <cite>Steve jobs</cite>
                </p>
            </div>
            <div className='row row-cols-1 row-cols-md-3 container mx-auto' >
                <div>
                    <div className="aboutDetails rounded-pill">
                        <FontAwesomeIcon icon={faUser} className="fs-4  rounded rounded-circle p-2 detailsIcons"></FontAwesomeIcon>
                        <p>Name: Sabbir alam</p>
                    </div>
                </div>
                <div>
                    <div className="aboutDetails rounded-pill">
                        <FontAwesomeIcon icon={faEnvelope} className="fs-4  rounded  rounded-circle p-2 detailsIcons"></FontAwesomeIcon>
                        <p>Email: sabbir21122@gmail.com</p>
                    </div>
                </div>
                <div>
                    <div className="aboutDetails rounded-pill">
                        <FontAwesomeIcon icon={faPhone} className="fs-4  rounded  rounded-circle p-2 detailsIcons"></FontAwesomeIcon>
                        <p>Phone Number: +880 1315120956</p>
                    </div>
                </div>
                
                <div>
                    <div className="aboutDetails rounded-pill">
                        <FontAwesomeIcon icon={faCalendar} className="fs-4   rounded rounded-circle p-2 detailsIcons"></FontAwesomeIcon>
                        <p>Birth Day: 22 september 2001</p>
                    </div>
                </div>
                <div>
                    <div className="aboutDetails rounded-pill">
                        <FontAwesomeIcon icon={faBuildingUser} className="fs-4   rounded-circle p-2 detailsIcons"></FontAwesomeIcon>
                        <p>Age: 20 years</p>
                    </div>
                </div>
                <div>
                    <div className="aboutDetails rounded-pill">
                        <FontAwesomeIcon icon={faFaceGrin} className="fs-4   rounded-circle p-2 detailsIcons"></FontAwesomeIcon>
                        <p>Hobby: Planting</p>
                    </div>
                </div>
              

            </div>
        </div>
    );
};

export default AboutMe;