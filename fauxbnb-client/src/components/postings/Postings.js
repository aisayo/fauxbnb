import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import PostingList from './PostingList'
import { fetchPostings } from '../../actions/postingsActions'

const Postings = ({ fetchPostings, postings }) => {

    useEffect(() => {
        fetchPostings()
    }, [])

    return (
        <>
            <PostingList postings={postings}/>
        </>
    );
};

const mapStateToProps = state => {
    return {
        postings: state.postings
    }
}

export default connect(mapStateToProps, {fetchPostings})(Postings);

