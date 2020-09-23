import React from 'react';

import PostingList from './PostingList'

const posts = [
    {id: 1, title: 'Testing', description: 'testing', price: '100.00', availability: '9/02/2020'},
    {id: 2, title: 'Testing1', description: 'testing1', price: '100.00', availability: '9/03/2020'},
    {id: 3, title: 'Testing2', description: 'testing2', price: '100.00', availability: '9/04/2020'}
]

const Postings = () => {
    return (
        <>
            <PostingList posts={posts}/>
        </>
    );
};

export default Postings;

