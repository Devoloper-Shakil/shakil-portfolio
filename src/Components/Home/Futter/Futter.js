import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF, faGithub, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Futter = () => {
    return (
        <div style={{ marginTop:"200px"}} className="text-center p-5">
            <div className="row">
                <div  className="col-md-4 text-light">------------------------------------------------------</div>
                <div className="col-md-4 text-light d-flex  ">
                  
                   <h3> <a href="https://www.facebook.com/md.shshakil.52/"className="ms-5" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon= {faFacebookF} /></a></h3>
                   <h3> <a href="https://twitter.com/shakilh60641273"className="ms-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /></a></h3>
                   <h3> <a href="https://www.linkedin.com/in/md-shakil-hasan-0a24891a4/"className="ms-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></h3>
                   <h3> <a href="https://github.com/Devoloper-Shakil"className="ms-3" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} /></a></h3>
                   <h3>  <a href="https://www.instagram.com/sh_shakil_69/"className="ms-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare} /></a></h3>
                </div>
                <div className="col-md-4 text-light">---------------------------------------------------------</div>
            </div>
            <h6 className="text-light mt-5">Designed & Built by <a target="_blank" href="https://github.com/Devoloper-Shakil"> Shakil Hasna</a></h6>
        </div>
    );
};

export default Futter;