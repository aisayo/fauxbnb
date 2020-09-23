import React from 'react';

import Posting from './Posting'

const PostingList = ({ posts }) => {
    return (
        <div>
            { posts.map(post => <Posting post={post} />) }
        </div>
    );
};

export default PostingList;