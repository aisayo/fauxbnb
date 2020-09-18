import React, { useState } from 'react';

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
       <form>
           <label>Email: </label>
           <input 
                type='text'    
                value={email}
                onChange={e => setEmail(e.target.value)}            
           />

            <br/>
            <br/>
            <label>Password: </label>
            <input 
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

export default UserLogin;