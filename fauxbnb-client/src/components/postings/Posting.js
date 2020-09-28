import React from 'react';
import { connect } from 'react-redux'

import { deletePost } from '../../actions/postingsActions'

const Posting = ({ post, deletePost }) => {

    return (
        <p>
            {post.title} - 
            {post.description} - 
            ${post.price} - 
            {post.availability} - 
            <button onClick={() => deletePost(post)}>Delete</button>
            
        </p>
    );
};

export default connect(null, { deletePost })(Posting);