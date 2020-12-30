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
            password: "defaiultpass"
        }
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this)
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this)
    }
    render(){
        return(
            <div>
                User Name:<input type="text" name="username" value={this.state.username} onChange={this.usernameChangeHandler}/>
                Password:<input type="password" name="Password" value={this.state.password} onChange={this.passwordChangeHandler}/>
                <button>Login</button>
            </div>
        )
    }
    usernameChangeHandler(event){
        this.setState({username:event.target.value})
    }
    passwordChangeHandler(event){
        this.setState({password:event.target.value})
    }
}

export default ToDoApp