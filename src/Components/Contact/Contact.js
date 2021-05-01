import React from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i8kif4q', 'template_mlbt748', e.target, 'user_sjQ8XoRojehzXdIUEXg47')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset();

    }

    return (
        <div >

            <div style={{ width: "59%", margin: "auto", height: "550px", marginTop: "74px", background: "rgb(23, 42, 69)", borderRadius: "15px" }}>
                <h1 className="text-light mt-5 p-3 text-center">Get In Touch</h1>
                <form className='text-center mt-3' onSubmit={sendEmail} action="">
                    <input className="form-control w-75 m-auto " type="text" name="subject" placeholder="Enter Your Subject" />
                    <br />
                    <input className="form-control w-75 m-auto" type="text" name="name" placeholder="Enter Your Name" />
                    <br />
                    <input className="form-control w-75 m-auto" type="email" name="email" placeholder="Enter Your Email" />
                    <br />
                    <textarea className="form-control w-75 m-auto" name="message" id="" cols="30" rows="5">Enter Your Message</textarea>
                    <br />
                    <input type="submit" className="btn-primary w-75" value="submit" />
                </form>
                <div className="ms-5 mt-3" >
                    <h6 className="text-light"><i>Shakil to</i> <a className="text-success" href="mailto:shshakilhasan69@gmail.com">shshakilhasan69@gmail.com</a> </h6>
                </div>
            </div>





        </div>
    );
};

export default Contact;