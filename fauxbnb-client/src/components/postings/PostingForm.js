import React, { useState } from 'react';
import { connect } from 'react-redux'

import TextField from '../common/TextField'
import { addPost } from '../../actions/postingsActions'

const PostingForm = ({ addPost }) => {

    const [formData, setState] = useState({ title: '', description: '', price: '', availability: ''})

    const setFormData = (e) => {
        setState({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const createPost = e => {
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
        <form onSubmit={createPost}>
            <label>Title: </label>
            <TextField 
                type='text' 
                value={formData.title} 
                onChange={setFormData}
                name="title"
            />
            <br/>
            <label>Description: </label>
            <TextField 
                type='text' 
                value={formData.description} 
                onChange={setFormData}
                name="description"
            />
            <br/>
            <label>Price: </label>
            <TextField 
                type='text' 
                value={formData.price} 
                onChange={setFormData}
                name="price"
            />

            <br/>
            <label>Availability</label>
            <TextField 
                type='text' 
                value={formData.availability} 
                onChange={setFormData}
                name="availability"
            />  
            
            <br/>
            <TextField 
                type='submit' 
                value='Create Post' 
            />
            
            </form>
    );
};

export default connect(null, { addPost })(PostingForm);