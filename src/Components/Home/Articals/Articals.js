import React from 'react';

const Articals = () => {
  return (
    <section className="mt-5 mb-5 p-5">
      <div className="d-flex">

        <h2 className="text-light"><span className="text-warning">Some of</span> my works</h2>
        <button style={{ marginLeft: "200px" }} type="button" class="btn btn-outline-success text-light mt-2 h-25">All Articals >></button>
       
      </div>
      <h1 className=' text-light text-center'>Articals is Comming Soon.....!</h1>
      <div className="row">
        <div className="col-md-4">
          <div class="card" style={{ width: '18rem' }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articals;