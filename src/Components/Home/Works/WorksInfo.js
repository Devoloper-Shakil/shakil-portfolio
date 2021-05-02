import React from 'react';
import gitIcons from '../../../images/github.svg';
import weblink from '../../../images/box-arrow-up-right.svg'
import './WorksInfo.css'

const WorksInfo = (props) => {
    const { name, img, id, discaption, skill,github,website } = props.work;
    return (
        <div >

            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div>
                        <img className="w-100 mt-4" src={img} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12  ">
                    <div style={{
                        background: "rgb(23, 42, 69)", height: "234px",
                        padding: "20px",borderRadius:"5px"
                      }} className="text-light w-100 work-info  ">
                        <h6>{id}</h6>
                        <h3>{name}</h3>
                        <h6>{discaption}</h6>
                        <p><b>{skill} </b></p>
                        {/* ,marginTop:"35px" ,marginLeft:"-42px" */}
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