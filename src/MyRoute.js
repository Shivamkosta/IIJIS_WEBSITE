import React from 'react'
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';

import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
// import LoginNavbar from './LoginNavbar';
// login/signup
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Activate from './screens/Activate.jsx';
import Private from './screens/Private.jsx';
import Admin from './screens/Admin.jsx';
import ForgetPassword from './screens/ForgetPassword.jsx';
import ResetPassword from './screens/ResetPassword.jsx';
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import LoginNavbar from './LoginNavbar'
// import iijis from './iijis';
import 'react-toastify/dist/ReactToastify.css';


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={LoginNavbar} />
                {/* Login/signup route */}
                <Route exact path='/home' exact render={props => <LoginNavbar {...props} />} />
                <Route exact path='/signin' exact render={props => <Login {...props} />} />
                <Route exact path='/register' exact render={props => <Register {...props} />} />
                <Route exact path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
                <Route exact path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
                <Route exact path='/users/activate/:token' exact render={props => <Activate {...props} />} />
                <PrivateRoute exact path="/private" exact component={Private} />
                <AdminRoute exact path="/admin" exact component={Admin} />
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
