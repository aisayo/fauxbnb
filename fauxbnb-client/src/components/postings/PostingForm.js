import React, { useState } from 'react';

import TextField from '../common/TextField'

const PostingForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [availability, setAvailability] = useState('')

    return (
        <form>
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

export default PostingForm;