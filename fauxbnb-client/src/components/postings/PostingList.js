import React from 'react';

import Posting from './Posting'

const PostingList = ({ postings }) => {

    return <> { postings.map(post => <Posting key={post.id} post={post} />) } </>
    
};

export default PostingList;