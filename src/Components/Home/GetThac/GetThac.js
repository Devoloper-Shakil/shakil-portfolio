import React from 'react';
import { Link } from 'react-router-dom';

const GetThac = () => {
    return (
        
        <section className="text-center mt-5">
         <div>
         <h5 className="text-success mb-5">What's Next?</h5>
         </div>
           <div className="mb-5">
           <h1 className="text-light">Get In Touch</h1>
           <p className="text-light w-75 m-auto">I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>
           </div>
           <div>
           <Link to="/contact"><button type="button" class="btn btn-outline-success w-25">Sey Hello</button></Link>
           </div>
        </section>
    );
};

export default GetThac;