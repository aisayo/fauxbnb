import React, { useEffect } from "react";
import { connect } from "react-redux";

import PostingList from "./PostingList";
import { fetchPosts } from "../../actions/postingsActions";

const Postings = ({ fetchPosts, postings }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <PostingList postings={postings} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postings: state.postings,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Postings);
