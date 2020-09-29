import React from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { deletePost } from '../../actions/postingsActions'

const Posting = ({ post, deletePost }) => {

    return (
        <Card>
            <CardContent>
                <Typography>
                {post.title} - 
                {post.description} - 
                ${post.price} - 
                {post.availability} - 
                </Typography>
                <Fab size="small" onClick={() => deletePost(post)} >
                    <HighlightOffIcon />
                </Fab>
            </CardContent>
        </Card>
    );
};

export default connect(null, { deletePost })(Posting);