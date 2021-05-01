import React from 'react';
import Articals from './Articals/Articals';

import GetThac from './GetThac/GetThac';
import Header from './Header/Header';

import Works from './Works/Works';

const Home = () => {
    return (
        <div >
       
            <Header></Header>
            <Works></Works>
            <Articals></Articals>
            <GetThac></GetThac>
           
        </div>
    );
};

export default Home;