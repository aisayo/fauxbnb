import React from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';


import { deletePost } from '../../actions/postingsActions'

const Posting = ({ post, deletePost }) => {

    return (
        <Card>
            {post.title} - 
            {post.description} - 
            ${post.price} - 
            {post.availability} - 
            <button onClick={() => deletePost(post)}>Delete</button>
            
        </Card>
    );
};

export default connect(null, { deletePost })(Posting);