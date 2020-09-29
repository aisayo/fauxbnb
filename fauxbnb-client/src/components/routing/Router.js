import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Home'
import UserLogin from '../users/UserLogin'
import UserSignup from '../users/UserSignup'
import Postings from '../postings/Postings'
import PostingForm from '../postings/PostingForm'

const Router = () => {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/users/login' component={UserLogin} />
           <Route path='/users/signup' component={UserSignup} />
           <Route exact path='/posts' component={Postings} />
           <Route exact path='/posts/new' component={PostingForm} />
       </Switch>
    );
};

export default Router;