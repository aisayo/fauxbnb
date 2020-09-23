import React from 'react';

const Posting = ({ post }) => {

    return (
        <p>
            {post.title} - 
            {post.description} - 
            ${post.price} - 
            {post.availability} - 
            
        </p>
    );
};

export default Posting;