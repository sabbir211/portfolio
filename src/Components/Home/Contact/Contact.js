import React, { useRef } from 'react';
import "./Contact.css"
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
const Contact = () => {
    const form = useRef();
  const handleSubmit = e => {console.log(form)
    e.preventDefault()
    emailjs.sendForm('service_esmsfb7', 'template_am2grqq', form.current, 'TwfdnrFJzJB_qjRzy')
    .then((result) => {
       
            swal("Message","Message sent successfully","success")

        e.target.reset()
    }, (error) => {
        swal("Sorry","Something went wrong","error");
    });

};
    return (
        <div className="m-4 " id='contact'>
            <h1 className='contactHead text-center'>CONTACT <span>MESSAGE</span> </h1>
            <div className='text-center  mx-auto formContainer'>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className="d-flex flex-column flex-md-row justify-content-center">
                    <input name="name"   type="text" placeholder='Name' className='inputField   my-3 rounded-pill py-1 mx-2  px-3 ' id='name'/>
                    <input name="email"  type="text" placeholder='Email ' className='inputField my-3 rounded-pill py-1 mx-2 px-3' id='Email'/>
                    </div>
                    <textarea name="message"  class="inputField d-block w-100 my-5 rounded" rows="5" placeholder="Message" id="floatingTextarea"></textarea>
                    <input type="submit" value="Send" className='btn btn-outline-primary px-5' />

                </form>
            </div>
        </div>
    );
};

export default Contact;