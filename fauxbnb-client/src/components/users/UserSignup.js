import React, { useState } from 'react';

import TextField from '../common/TextField'

const UserSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
       <form>

           <label>Email: </label>
           <TextField 
                type='text'    
                value={email}
                onChange={e => setEmail(e.target.value)}            
            />

            <br/>
            <br/>
            
            <label>Password: </label>
            <TextField
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}            
            />
            <br/>
            <br/>

            <input 
                type='submit'
                value='Login'                
            />

       </form>
    );
};

export default UserSignup;