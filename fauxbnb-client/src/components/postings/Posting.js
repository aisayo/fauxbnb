import React from 'react';
import { connect } from 'react-redux'
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { deletePost } from '../../actions/postingsActions'

const Posting = ({ post, deletePost }) => {

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Post Image"
                    height="500"
                    width="500"
                    image="https://novarearchitecture.co.nz/wp-content/uploads/2015/02/Childs-House-Thumbnail.jpg"
                    />
                <CardContent>
                    <Typography variant="h5">
                        {post.title}
                    </Typography>
                    <Typography >
                        {post.description}
                    </Typography>
                </CardContent>
            </CardActionArea>



                {post.description} 
                ${post.price} 
                {post.availability} 
        </Card>
    );
};

export default connect(null, { deletePost })(Posting);