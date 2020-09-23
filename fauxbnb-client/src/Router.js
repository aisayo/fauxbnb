import React from 'react'
import { Route, Switch } from 'react-router-dom'


import Home from './components/Home'
import UserLogin from './components/users/UserLogin'

const Router = () => {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/login' component={UserLogin} />
       </Switch>
    );
};

export default Router;