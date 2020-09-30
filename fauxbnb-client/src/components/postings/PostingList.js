import React from 'react';

import Posting from './Posting'

const PostingList = ({ postings }) => {

    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            { postings.map(post => <Posting key={post.id} post={post} />) } 
        </div>
    )
    
};

export default PostingList;