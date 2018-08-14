import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../modules/home/home';
import Warning from '../modules/utils/warning/warning';
import UserRegisterForm from '../modules/user/register/userRegisterForm';
import UserLoginForm from '../modules/user/userLoginForm';
import UserList from '../modules/user/userList';
import UserProfile from '../modules/user/profile/userProfile';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route exact path="/error" component={Warning} />

    <Route exact path="/user/list" component={UserList} />
    <Route exact path="/user/login" component={UserLoginForm} />
    <Route exact path="/user/register" component={UserRegisterForm} />
    <Route exact path="/user/:userId" component={UserProfile} />
  </Switch>
);

export default Routes;