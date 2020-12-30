import React, {Component} from 'react'

class ToDoApp extends Component{
    render(){
        return(
            <div>
                <LoginComponent/>
            </div>
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
                <LoginFailureState failureState={this.state.loginFailure}/>
                <LoginSuccessState successState={this.state.loginSuccess}/>
                User Name:<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClick}>Login</button>
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
        if(this.state.username=='defaultuser' && this.state.password=='dummy'){
            console.log('Login Successful')
            this.setState(
                    {
                        loginSuccess:true,
                        loginFailure:false
                    }
                )
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

function LoginFailureState(props){
    if(props.failureState){
        return <div> Login Failed! </div>
    }
    else{
        return null
    }
}

function LoginSuccessState(props){
    if(props.successState){
        return <div>Login Successful! </div>
    }
    else{
        return null
    }
}



export default ToDoApp