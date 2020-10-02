import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Home'
import Postings from '../postings/Postings'
import PostingForm from '../postings/PostingForm'
import UserForm from '../users/UserForm'

const Router = () => {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/users/login' render={(props) => <UserForm {...props} />} />
           <Route path='/users/signup' render={(props) => <UserForm {...props} />} />
           <Route exact path='/posts' component={Postings} />
           <Route exact path='/posts/new' component={PostingForm} />
       </Switch>
    );
};

export default Router;