import React from "react";

import Posting from "./Posting";

const PostingList = ({ postings }) => {

  return (
    <div>
      {postings.map((post) => (
        
        <Posting key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostingList;
