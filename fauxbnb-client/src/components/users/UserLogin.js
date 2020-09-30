import React, { useState } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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

// const divStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: 50,
//     flexDirection: 'column'


// }
// const formStyle = { 
//     border: 'solid',
//     borderColor: 'lightGray',
//     paddingTop: 25,
//     paddingBottom: 25,
//     paddingRight: 25,
//     paddingLeft: 25

   
// }

export default UserLogin;

