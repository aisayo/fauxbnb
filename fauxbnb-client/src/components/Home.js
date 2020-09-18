import React from 'react';

import UserLogin from './users/UserLogin'

const Home = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center'}}>Welcome to FauxBnB</h1>
            <img alt="HomePage Img" src="https://images.unsplash.com/photo-1566779342022-8e33031b622c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" />
            <UserLogin />
        </>
    );
};

export default Home;