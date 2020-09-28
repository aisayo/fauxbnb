import React, { useState } from 'react';
import { connect } from 'react-redux'

import TextField from '../common/TextField'
import { addPost } from '../../actions/postingsActions'

const PostingForm = ({ addPost }) => {

    //create one state object

    const [formData, setState] = useState({ title: '', description: '', price: '', availability: ''})

    const setPost = (e) => {
        setState({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const createPosting = e => {
        e.preventDefault()
        addPost(formData)
        resetForm()
    }

    const resetForm = () => {
        setState({
            title: '', 
            description: '', 
            price: '', 
            availability: ''
        })
    }

    return (
        <form onSubmit={createPosting}>
            <TextField 
                type='text' 
                value={formData.title} 
                onChange={setPost}
                name="title"
            />

            <TextField 
                type='text' 
                value={formData.description} 
                onChange={setPost}
                name="description"
            />

            <TextField 
                type='text' 
                value={formData.price} 
                onChange={setPost}
                name="price"

            />      

            <TextField 
                type='text' 
                value={formData.availability} 
                onChange={setPost}
                name="availability"

            />  

            <TextField 
                type='submit' 
                value='Create Post' 
            />
            
            </form>
    );
};

export default connect(null, { addPost })(PostingForm);