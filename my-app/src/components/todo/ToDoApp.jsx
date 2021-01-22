import React, {Component} from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

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
                            <Route path='/welcome/:name' exact component={WelcomeComponent}></Route>
                            <Route path='/todos' exact component={ListTodosComponent}></Route>
                            <Route path='/logout' exact component={LogoutComponent}></Route>
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

function ErrorComponent(){
    return(
    <div>Error Occurred, Contact Support!</div>
    )
}

class HeaderComponent extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com" className="navbar-brand">defaultuser</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to='/welcome/defaultUser'>Home</Link></li>
                        <li><Link className="nav-link" to='/todos'>todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to='/login'>login</Link></li>
                        <li><Link className="nav-link" to='/logout'>logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return(
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2021 @myorg    </span>
            </footer>
        )
    }
}

class LogoutComponent extends Component{
    render(){
        return(
            <>
                <h1>You are logged out!</h1>
                <div className="container">
                    Thank you for using our application!
                </div>
            </>
        )
    }
}

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [
                {id:1 , description : 'Learn React', done: false, targetDate: new Date()},
                {id:2 , description : 'Learn Spring', done: false, targetDate: new Date()},
                {id:3 , description : 'Learn Distributed systems', done: false, targetDate: new Date()}
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>isCompleted</th>
                                <th>targetDate</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
            <>
                <h1>Welcome!</h1>
                <div className={Container}>
                    Welcome {this.props.match.params.name}! You can manage your todo list <Link to='/todos'>here</Link>.
                </div>
            </>
        )
    }
}

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "defaultuser",
            password: "",
            loginFailure: false,
            loginSuccess: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <LoginFailureState failureState={this.state.loginFailure}/> */}
                    {this.state.loginFailure && <div className="alert alert-warning">Login Failed!</div>}
                    {/* <LoginSuccessState successState={this.state.loginSuccess}/> */}
                    {this.state.loginSuccess && <div>Login Successful!</div>}
                    User Name:<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClick}>Login</button>
                </div>
            </div>
        )
    }
    handleChange(event){
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState(
            {
                // use [] if you want to use 'event.target.value' as a variable name
                [event.target.name] : event.target.value
            }
        )
    }
    loginClick(){
        //hard coding authentication
        // console.log(this.state)
        if(this.state.username == "defaultuser" && this.state.password=="dummy"){
            AuthenticationService.registedSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else{
            this.setState(
                    {
                        loginFailure:true,
                        loginSuccess:false
                    }
                )
        }
    }
}

// function LoginFailureState(props){
//     if(props.failureState){
//         return <div> Login Failed! </div>
//     }
//     else{
//         return null
//     }
// }

// function LoginSuccessState(props){
//     if(props.successState){
//         return <div>Login Successful! </div>
//     }
//     else{
//         return null
//     }
// }



export default ToDoApp