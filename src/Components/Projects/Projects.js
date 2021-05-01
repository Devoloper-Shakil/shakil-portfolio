import React from 'react';
import ProjestsInfo from './ProjestsInfo';
import ridurs from '../../images/riders.PNG';
import itshope from '../../images/it shope.PNG'
import ecommarce from '../../images/ecomarce.PNG'
import slider from '../../images/slider.PNG'

const Projects = () => {
    const resentProjects=[
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
        img:ecommarce,
        skill:"Reactjs, Node.js, Express.js, MongoDB.js, Firebase, Bootstrap5",
        github:"https://github.com/Devoloper-Shakil/full-stack-clinte",
        website:"https://xenodochial-newton-be7be5.netlify.app"
    },
    {
        id:"3",
        name: "Online product sell",
        discaption:"A single page Slider create website  app where people are able to select product in their cart and checkout the cart with their information .shipping informitone set and carded card add. ",
        img:slider,
        skill:"Reactjs, Node.js, Express.js, MongoDB.js, Firebase, Bootstrap5 ",
        github:"https://github.com/Devoloper-Shakil/full-stack-clinte",
        website:"https://github.com/Devoloper-Shakil/ema-hojn-client"
    },
    { 
        id:"4",
        name: "create a slider",
        discaption:"A single page computer service app where people are able to select a photo  and next a new images slider ",
        img:itshope,
        skill:"JavaScript, HTML, CSS,  Bootstrap5",
        github:"https://github.com/Devoloper-Shakil/fancy-slider",
        website:"https://devoloper-shakil.github.io/fancy-slider/"
    }
]
    return (
        <section style={{}} className="mt-5 ">
            <h1 className="text-light"> Resent Projects</h1>
            <div style={{height:'800px'}} className="mt-5">
                {
                  resentProjects.map(project =><ProjestsInfo project={project}></ProjestsInfo>)  
                }
            </div>
        </section>
    );
};

export default Projects;