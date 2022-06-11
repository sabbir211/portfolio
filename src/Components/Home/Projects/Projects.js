import React from 'react';
import picker from "../../../Images/PickerHome.png"
import car from "../../../Images/CarHouseHome.png"
import capture from "../../../Images/captureHome.png"
import { Link } from "react-router-dom"
import "./Projects.css"
const Projects = () => {

    const data = [
        {
            id: 1,
            name:"Picker",
             images: [
                " https://i.ibb.co/FYLR1vz/screencapture-picker-44e7a-web-app-dashboard-makeadmin-2022-06-11-07-43-53.png",
                "https://i.ibb.co/zQKnPpv/screencapture-picker-44e7a-web-app-dashboard-myorders-2022-06-11-07-44-54.png",
                "https://i.ibb.co/k2KSR75/screencapture-picker-44e7a-web-app-login-2022-06-11-07-39-18.png",
                "https://i.ibb.co/RTB4VtV/screencapture-picker-44e7a-web-app-dashboard-2022-06-11-07-42-12.png",
                "https://i.ibb.co/r41YRBK/screencapture-picker-44e7a-web-app-dashboard-addreview-2022-06-11-07-45-31.png",
                "https://i.ibb.co/WFDDrG2/screencapture-picker-44e7a-web-app-dashboard-add-Tool-2022-06-11-07-42-48.png"], technologies: ["React", "Tailwind", "Express.js", "Mongodb", "React-stripe","Firebase"], site: "https://picker-44e7a.web.app/", client: "https://github.com/sabbir211/Picker-client", server: "https://github.com/sabbir211/picker-server",
        },
        {
            id:2,
            name:"Capture Memory",
             images:["https://i.ibb.co/tpSbL0v/screencapture-single-service-provider-web-app-home-2022-06-11-07-55-49.png",
           " https://i.ibb.co/qMzPHF6/screencapture-single-service-provider-web-app-login-2022-06-11-07-51-49.png",
           " https://i.ibb.co/tpSbL0v/screencapture-single-service-provider-web-app-home-2022-06-11-07-55-49.png",
           " https://i.ibb.co/s2RKbF2/screencapture-single-service-provider-web-app-checkout-2-2022-06-11-07-53-03.png"
            ],
            technologies:["React", "bootstrap", "Express.js", "Mongodb","Firebase"],
            client:" https://github.com/sabbir211/capture-memory",
            server:""
        
        },
        {
            id:3,
            name:"Car House",
            images:[
                "https://i.ibb.co/VMkZRwD/screencapture-car-house-57f8e-firebaseapp-blogs-2022-06-11-07-50-56.png",
                "https://i.ibb.co/wBc95Y7/screencapture-car-house-57f8e-firebaseapp-Login-2022-06-11-07-48-43.png",
                "https://i.ibb.co/zmdg2ZD/screencapture-car-house-57f8e-firebaseapp-add-Car-2022-06-11-07-49-37.png",
               " https://i.ibb.co/tCpwP69/screencapture-car-house-57f8e-firebaseapp-manage-Inventoris-2022-06-11-07-49-49.png "
            ],
            technologies:["HTML","CSS","React", "bootstrap","Firebase"],
            client:"https://github.com/sabbir211/car-house",
            server:"https://github.com/sabbir211/car-house-server"
        }

    ]
   
    return (

        <div className='my-5' style={{ color: "white" }} id="projects">
            <div><h1 className='text-center text-white fs-1 my-5'>My <span className='projects-text'>Projects </span> </h1></div>
            <div className='row row-cols-1 container mx-auto row-cols-md-3 text-center'>
                <div className='shadow-lg'>

                    <div className='d-flex'>
                        <img src={picker} alt="" className='w-auto  projectImg' />
                        <div>
                            <h3>Picker</h3>
                            <ul className='text-start'>
                                <li>User Login Registration</li>
                                <li>User can buy products</li>
                                <li>User can complete payment with card</li>
                                <li>Admin can add new admin </li>
                            </ul>
                        </div>
                    </div>
                    <Link to={`/project/${1}`} className='btn btn-outline-primary d-block w-100 my-2'>See More</Link>
                </div>
                <div className='shadow-lg'>
                    <div className='d-flex'>
                        <img src={car} alt="" className='w-auto projectImg' />
                        <div>
                            <h3 >Car House</h3>
                            <ul className='text-start'>
                                <li>User Login and Registration</li>
                                <li>Delivery Facility</li>
                                <li>User can Restock products</li>
                            </ul>
                        </div>
                    </div>
                    <Link to={`/project/${2}`} className='btn btn-outline-primary d-block w-100 my-2'>See More</Link>

                </div>
                <div className='shadow-lg'>
                    <div className='d-flex'>
                        <img src={capture} alt="" className='w-auto  projectImg' />
                        <div >
                            <h3 className='fs-5'>Capture Memory</h3>
                            <ul className='text-start'>
                                <li>User login Registration</li>
                                <li>Product checkout</li>
                                <li>Slider Footer</li>
                            </ul>
                        </div>

                    </div>

                    <Link to={`/project/${3}`} className='btn btn-outline-primary d-block w-100 my-2'>See More</Link>
                </div>

            </div>
        </div>

    );
};

export default Projects;