import './App.css';
import Character from './Components/Character'
import React,{Component} from 'react'

import Temp from './Components/Temp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Character/>
        <Temp></Temp>
      </div>
    )
  }
}

export default App;