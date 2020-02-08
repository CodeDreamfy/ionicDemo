import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className="home-app">
        <div className="page-container">{this.props.children}</div>
      </div>
    )
  }
}

export default App