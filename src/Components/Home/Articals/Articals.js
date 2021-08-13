import React from 'react';

const Articals = (props) => {

  
  
  const { title, img, someDis ,link} = props.blogs;

  return (
    
    <div  className="col-md-6 mt-5">
    <div class="card" style={{ width: '24rem' }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title text-center">{title}</h5>
            <p class="card-text mt-3">{someDis}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">READ MORE</a>
           
        </div>


    </div>
</div>

  );
};

export default Articals;