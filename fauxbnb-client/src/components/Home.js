import React from 'react';
import { Image } from 'react-bootstrap'
import homeImg from '../img/homeImg.jpeg'

const Home = () => {
    return (
        <>
            <Image fluid alt="HomePage" src={homeImg} />
        </>
    );
};

export default Home;