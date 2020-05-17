import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import './index.scss'
import('./a')
const env = process.env.NODE_ENV

console.log(env)

class App extends Component {
  render () {
    return (<div className='ni-home'>我来了，我看到了，我征服了！！！！</div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));