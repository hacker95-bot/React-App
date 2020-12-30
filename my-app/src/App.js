import React, { Component } from 'react'
import SecondComponent from './components/learning-examples/SecondComponent'
import FirstComponent from './components/learning-examples/FirstComponent'
import Counter from './components/counter/Counter'
import ToDoApp from './components/todo/ToDoApp'
import './App.css'
 
class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Counter/> */}
          <ToDoApp/>
      </div>
    )
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
          Hello World!
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
      </div>
    )
  }
}

export default App