import React, {Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'


class Counter extends Component{
    //defining constructor to set initial state
    constructor(){
        super()
        
        //state to handle click event
        this.state = {
            counter: 0
        }

        //binding 'this' to increment method
        this.increment = this.increment.bind(this)
    }

    render() {
        return (
          <div className="Counter">
              <CounterButton by={1} incrementMethod={this.increment}/>
              <CounterButton by={5} incrementMethod={this.increment}/>
              <CounterButton by={10} incrementMethod={this.increment}/>
              <span className="count">{this.state.counter}</span>
          </div>
        )
      }
    increment(by){
        this.setState(
            (p) => {
                console.log(p)
                return {counter: p.counter + by}
            }
        )      
    }
}

class CounterButton extends Component{
    //defining constructor to set initial state
    constructor(){
        super()
        
        //state to handle click event
        this.state = {
            counter: 0
        }

        //binding 'this' to increment method
        this.increment = this.increment.bind(this)
    }
    render(){
        return(
            <div className="Counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                {/* <span className="count">{this.state.counter}</span> */}
            </div>
        )
    }
    increment(){
        this.props.incrementMethod(this.props.by)    
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter
