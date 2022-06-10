import React from 'react';
import picker from "../../../Images/PickerHome.png"
import car from "../../../Images/CarHouseHome.png"
import capture from "../../../Images/captureHome.png"
import "./Projects.css"
const Projects = () => {
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
                    <button className='btn btn-outline-primary d-block w-100 my-2'>See More</button>
                </div>
                <div>
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
                    <button className='btn btn-outline-primary d-block w-100 my-2'>See More</button>

                </div>
                <div >
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

                <button className='btn btn-outline-primary d-block w-100 my-2'>See More</button>
                </div>

            </div>
        </div>

    );
};

export default Projects;