import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../../actions/postingsActions";
import { Card, Button } from "react-bootstrap";

const Posting = ({ post, deletePost }) => {
  return (
    <Card style={{ width: "18rem", display: "inline-block" }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.description}</Card.Text>
        <Card.Text>${post.price}</Card.Text>
        <Card.Text>{post.availability}</Card.Text>
        <Button onClick={() => deletePost(post)}>x</Button>
      </Card.Body>
    </Card>
  );
};

export default connect(null, { deletePost })(Posting);
