import React, {Component} from 'react'
import { Container } from 'react-bootstrap'
import {Link} from "react-router-dom"

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

export default WelcomeComponent