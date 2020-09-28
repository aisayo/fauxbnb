import React, { useState } from 'react';
import { connect } from 'react-redux'

import TextField from '../common/TextField'
import { addPost } from '../../actions/postingsActions'

const PostingForm = ({ addPost }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [availability, setAvailability] = useState('')

    const createPosting = e => {
        const post = {
            title,
            description,
            price,
            availability
        }
        e.preventDefault()
        addPost(post)
    }

    return (
        <form onSubmit={createPosting}>
            <TextField 
                type='text' 
                value={title} 
                onChange={(e) => {setTitle(e.target.value)}} 
            />

            <TextField 
                type='text' 
                value={description} 
                onChange={(e) => {setDescription(e.target.value)}} 
            />

            <TextField 
                type='text' 
                value={price} 
                onChange={(e) => {setPrice(e.target.value)}} 
            />      

            <TextField 
                type='text' 
                value={availability} 
                onChange={(e) => {setAvailability(e.target.value)}} 
            />  

            <TextField 
                type='submit' 
                value='Create Post' 
            />
            
            </form>
    );
};

export default connect(null, { addPost })(PostingForm);