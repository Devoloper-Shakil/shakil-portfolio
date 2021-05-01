import React from 'react';
import gitIcons from '../../../images/github.svg';
import weblink from '../../../images/box-arrow-up-right.svg'

const WorksInfo = (props) => {
    const { name, img, id, discaption, skill,github,website } = props.work;
    return (
        <div >

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <img className="w-100 mt-4" src={img} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div style={{
                        background: "rgb(23, 42, 69)", height: "234px",
                        padding: "16px",marginLeft:"-42px",marginTop:"35px"
                      }} className="text-light w-100  ">
                        <h6>{id}</h6>
                        <h3>{name}</h3>
                        <h6>{discaption}</h6>
                        <p>{skill}</p>

                     <div>
                          <a title="Github" target="_blank" href={github}>
                      <img className="" style={{width:"25px"}} src={gitIcons} alt=""/>
                      </a>
                      <a title="live web" target="_blank" href={website}>
                      <img className=" ms-3 " style={{width:"25px"}} src={weblink} alt=""/>
                      </a>
                     </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorksInfo;