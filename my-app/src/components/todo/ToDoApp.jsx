import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import LogoutComponent from './LoginComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'


class ToDoApp extends Component{
    render(){
        return(
            <div>
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path='/' exact component={LoginComponent}></Route>
                            <Route path='/login' exact component={LoginComponent}></Route>
                            <AuthenticatedRoute path='/welcome/:name' exact component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path='/todos' exact component={ListTodosComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path='/logout' exact component={LogoutComponent}></AuthenticatedRoute>
                            <Route component={ErrorComponent}></Route>
                        </Switch>
                        <FooterComponent/>  
                    </>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

export default ToDoApp