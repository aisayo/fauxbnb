import React from 'react';
import { connect } from 'react-redux'
import { deletePost } from '../../actions/postingsActions'

const Posting = ({ post, deletePost }) => {
console.log(post)
    return (
        <div></div>
    );
};

export default connect(null, { deletePost })(Posting);