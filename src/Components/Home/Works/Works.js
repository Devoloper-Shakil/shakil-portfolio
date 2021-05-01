import React from 'react';
import ridurs from '../../../images/riders.PNG';
import itshope from '../../../images/it shope.PNG'
import WorksInfo from './WorksInfo';
import { Link } from 'react-router-dom';

const Works = () => {
    const worksResume=[
        {
            id:"1",
        name: "Online raidurs",
        discaption:"A single page Car riders app where people are able to select car in their cart and checkout the cart with their information .",
        img:ridurs,
        skill:"Reactjs, React Router, Firebase, Bootstrap5",
        github:"https://github.com/Devoloper-Shakil/shakil-ridurs",
        website:"https://priceless-fermat-5b5ed3.netlify.app/"
    },   {
        id:"2",
        name: "It Shope service",
        discaption:"A single page computer service app where people are able to select car in their cart and checkout the cart with their information . ",
        img:itshope,
        skill:"Reactjs, Node.js, Express.js, MongoDB.js, Firebase, Bootstrap5",
        github:"https://github.com/Devoloper-Shakil/full-stack-clinte",
        website:"https://xenodochial-newton-be7be5.netlify.app"
    }
]
    return (
        <section style={{marginTop:"182px"}} className=" mb-5">
            <div className="d-flex">

                <h2 className="text-light"><span className="text-warning">Some of</span> my works</h2>
             <Link to="/project"><button style={{marginLeft:"200px"}} type="button" class="btn btn-outline-success text-light w-50 ">All Projects >></button></Link>
            </div>
            <div style={{marginTop:"42px"}}>
                {
                    worksResume.map(work=><WorksInfo work={work}></WorksInfo>)
                }
            </div>
        </section>
    );
};

export default Works;