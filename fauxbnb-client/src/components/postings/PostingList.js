import React from 'react';

import Posting from './Posting'

const PostingList = ({ posts }) => {

    return <> { posts.map(post => <Posting key={post.id} post={post} />) } </>
    
};

export default PostingList;