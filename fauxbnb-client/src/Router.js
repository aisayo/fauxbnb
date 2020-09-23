import React from 'react'
import { Route, Switch } from 'react-router-dom'


import Home from './components/Home'
import UserLogin from './components/users/UserLogin'
import UserSignup from './components/users/UserSignup'
import Postings from './components/postings/Postings'

const Router = () => {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/users/login' component={UserLogin} />
           <Route path='/users/signup' component={UserSignup} />
           <Route exact path='/postings' component={Postings} />
       </Switch>
    );
};

export default Router;