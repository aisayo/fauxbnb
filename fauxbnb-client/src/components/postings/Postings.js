import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PostingList from './PostingList'
import { fetchPosts } from '../../actions/postingsActions'

const Postings = ({ fetchPosts, postings }) => {

    useEffect(() => {
        fetchPosts()
    }, [postings])

    return (
        <>
            <PostingList postings={postings}/>
            <Link to='/posts/new'>Add Listing</Link>
        </>
    );
};

const mapStateToProps = state => {
    return {
        postings: state.postings
    }
}

export default connect(mapStateToProps, {fetchPosts})(Postings);

