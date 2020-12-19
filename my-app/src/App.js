import React, { Component } from 'react'
import SecondComponent from './components/learning-examples/SecondComponent'
import FirstComponent from './components/learning-examples/FirstComponent'
import logo from './logo.svg'
import './App.css'
 
class App extends Component {
  render() {
    return (
      <div className="App">
          Hello World!
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
      </div>
    )
  }
}


export default App