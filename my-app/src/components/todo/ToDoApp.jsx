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
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    render(){
        return(
            <div>
                User Name:<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button>Login</button>
            </div>
        )
    }
    handleChange(event){
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState(
            {
                // use [] if you want to use 'event.target.value' as a variable name
                [event.target.name] : event.target.value
            }
        )
    }
}

export default ToDoApp