import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import PostingList from './PostingList'
import { fetchPostings } from '../../actions/postingsActions'

const Postings = ({ fetchPostings }) => {

    useEffect(() => {
        fetchPostings()
    })

    return (
        <>
            {/* <PostingList/> */}
        </>
    );
};

export default connect(null, {fetchPostings})(Postings);

