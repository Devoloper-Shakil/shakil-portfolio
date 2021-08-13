import React from 'react';
import AllArtical from './Articals/AllArtical';
import GetThac from './GetThac/GetThac';
import Header from './Header/Header';

import Works from './Works/Works';

const Home = () => {
    return (
        <div >

            <Header></Header>
            <Works></Works>
            <AllArtical></AllArtical>
            <GetThac></GetThac>

        </div>
    );
};

export default Home;