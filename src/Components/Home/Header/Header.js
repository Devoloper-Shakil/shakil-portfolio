import React from 'react';
import profile from '../../../images/profile.png'
import resume from '../../../images/shakil-resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div style={{ marginTop: "85px" }} className="container mb-5 ">
            <div className="row">
                <div className="col-md-6 col-sm-12 ">
                    <div className="detels">
                    <h5 className="text-primary">Hello, I'm</h5>
                    <h1 className="text-light">Shakil Hasan</h1>
                    <ul className="text-primary d-flex ">
                        <li >Web Developer</li>
                        <li className="ms-5">React developer</li>
                    </ul>
                    <p className="text-light" >I am working as a web developer. I like to learn about new things or new technologies and I like to learn on my own. I am familiar to work with React, Nodejs, javaScript MongoDB, Firebase, SCSS etc. I am always ready to learn if I have to work outside of this because learning something new is my fashion. </p>
                   
                    <div >
                       <Link to="/about"> <button type="button" class="btn btn-success">About me</button></Link>
                        <a href={resume} download="proposed_file_name">  <button type="button" class="btn btn-outline-success ms-5">Download Resume</button></a>
                     </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 ">
                    <img class="img-fluid w-75 mx-auto d-block" src={profile} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Header;