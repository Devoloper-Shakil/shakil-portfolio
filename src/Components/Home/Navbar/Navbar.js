import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <div>


            <nav class="navbar navbar-expand-lg navbar-light ">
            <Link class="navbar-brand" to="/home">
                            <img className=" w-50" src={logo} alt="" />
                        </Link>
                <div class="container-fluid">
                    <button class="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon  "></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
                        {/* <Link class="navbar-brand" to="/home">
                            <img className=" w-25" src={logo} alt="" />
                        </Link> */}
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-light p-3" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light p-3" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light p-3" to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light p-3" to="/project">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light p-3" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                             <a href="https://drive.google.com/file/d/1BeuJpz_yCaWOkp_QcZ_GdmKFKkvXsZci/view" target="_blank" rel="noopener noreferrer">
                             <button type="button" class="btn btn-outline-success ms-5 text-light mt-2 ">Resume</button>
                             </a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;