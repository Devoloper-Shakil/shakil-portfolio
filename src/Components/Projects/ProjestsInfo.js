import React from 'react';
import gitIcons from '../../images/github.svg';
import weblink from '../../images/box-arrow-up-right.svg'
import './Project.css'
const ProjestsInfo = (props) => {
    const { name, img, skill, website, github,discaption } = props.project;
    return (
        <div  >





            <div class="card slide" style={{ width: '22rem',float: 'left',margin: '10px'}}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{discaption}</p>
                </div>
                <ul class="list-group list-group-flush">
                <div className="text-center">
                    <h6> <b>{skill}</b></h6>
                    </div>
                </ul>
                    
               
                <div style={{height:"50px"}} className="d-flex mt-2 ">
                    <a title="Github" target="_blank" href={github}>
                        <img className="" style={{ width: "25px" }} src={gitIcons} alt="" />
                    </a>
                    <a title="live web" target="_blank" href={website}>
                        <img className=" ms-3" style={{ width: "25px" }} src={weblink} alt="" />
                    </a>
                </div>

            </div>




    







            </div>
    );
};

export default ProjestsInfo;