import React from 'react';

const UserLogin = () => {
    return (
       <form>
           <label>Email: </label>
           <input 
                type='text'                
           />

            <br/>
            <br/>
            <label>Password: </label>
            <input 
                type='password'
                
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