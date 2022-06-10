import React from 'react';
import banner from "../../../Images/banner3.jpg"
import "./Banner.css"
import mypic from "../../../Images/mypic.png"
const Banner = () => {
    return (
        <div>
            <div className='position-relative'>

                {/* <img src={banner} alt="" className='img-fluid'/> */}
                {/* className='position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center text-white banner-bg' */}
                <div className="for-bg"></div>
                <div className='banner-bg d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${banner})` }} >
                    <div className="text-center banner-text">
                        <h1 className="fw-bold text-white">Hi there!</h1>
                        <h3 className='text'>I'm Web Developer</h3>
                        <a href='Sabbir-alam.pdf' download className='btn btn-outline-primary'>Download Resume</a>
                        <a href='#contact' className='btn btn-outline-primary ms-3'>Contact Me</a>
                    </div>
                </div>
            </div>
            <div className=' mx-auto my-pic position-relative'>
                <img src={mypic} alt="" className='w-25 mx-auto d-block m-4' />
            </div>
        </div>
    );
};

export default Banner;