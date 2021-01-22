import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

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
        if(this.state.username === "defaultuser" && this.state.password === "dummy"){
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

export default LoginComponent