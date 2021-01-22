import { withRouter } from 'react-router'
import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import {Link} from "react-router-dom";


/*
In order for the header component to render even when the state is not changed,
we used withRouter to make headerComponent render whever any route is accessed through header
*/

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com" className="navbar-brand">defaultuser</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to='/welcome/defaultUser'>Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to='/todos'>todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to='/login'>login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to='/logout' onClick={AuthenticationService.logout}>logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);