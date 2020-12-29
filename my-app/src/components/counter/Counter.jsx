import React, {Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'


class Counter extends Component{
    //defining constructor to set initial state
    constructor(){
        super()
        
        this.test = 11
        //state to handle click event
        this.state = {
            counter: 0
        }

        //binding 'this' to increment method
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render() {
        return (
          <div className="Counter">
              <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
              <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
              <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
              <span className="count">{this.state.counter}</span>
              <div><button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        )
      }
    increment(by){ 
        this.setState(
            (prev) => {
                //console.log(prev)
                return {counter: prev.counter + by}
            }
        )      
    }
    decrement(by){
        this.setState(
            (prev) => {
                return {counter: prev.counter - by}
            }
        )
    }

    reset(){
        this.setState({counter:0})
    }
}

class CounterButton extends Component{
    //defining constructor to set initial state
    constructor(){
        super()

        // //binding 'this' to increment method
        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)
    }
    render(){
        return(
            <div className="Counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    }
    // increment(){
    //     this.props.incrementMethod(this.props.by)
    // }
    // decrement(){
    //     this.props.decrementMethod(this.props.by)
    // }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter
