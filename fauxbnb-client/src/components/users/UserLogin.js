import React, { useState } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
       
    <div >  
        <h1>Login</h1>      
       <form >
           <FormGroup controlId="formBasicEmail">
                <FormControl 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
            </FormGroup>

            <br/>
            <br/>
            
            <FormGroup controlId="formBasicPassword">
                <FormControl
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}            
                />
            </FormGroup>
            <br/>
            <br/>

            <Button variant="primary" type="submit">
                Login               
            </Button>

        </form>
       </div>
    );
};

export default UserLogin;

