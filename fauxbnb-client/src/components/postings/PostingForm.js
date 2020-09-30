import React, { useState } from 'react';
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'

import TextField from '../common/TextField'
import { addPost } from '../../actions/postingsActions'

const PostingForm = ({ addPost }) => {

    const [formData, setState] = useState(
        { 
            title: '', 
            description: '', 
            price: '', 
            availability: '',
            location: '',
            img: ''
        }
        )

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
            availability: '',
            location: '',
            img: ''        
        })
    }

    return (
        <Form onSubmit={createPost}>
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
                type='content' 
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
            <label>Location</label>
            <TextField 
                type='text' 
                value={formData.location} 
                onChange={setFormData}
                name="location"
            />  

            <br/>
            <label>Add an Image</label>
            <TextField 
                type='text' 
                value={formData.img} 
                onChange={setFormData}
                name="img"
            />  



            <br/>
            <TextField 
                type='submit' 
                value='Create Post' 
            />
            
            </Form>
    );
};

export default connect(null, { addPost })(PostingForm);