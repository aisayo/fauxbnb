import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
    <div style={formStyle}>
       <Form >
           <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
            </Form.Group>

            <br/>
            <br/>
            
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}            
                />
            </Form.Group>
            <br/>
            <br/>

            <Button variant="primary" type="submit">
                Login               
            </Button>

       </Form>
       </div>
    );
};

const formStyle = { 
    display: 'flex', 
    justifyContent: 'center', 
    alignContent: 'center' 
}

export default UserLogin;

