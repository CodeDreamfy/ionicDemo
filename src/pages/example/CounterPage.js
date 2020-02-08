import React, { Component } from 'react';

class CounterPage extends Component {
  render() {
    return (
      <div className="examples-counter-page">
        <h1>Welcome CounterPage {JSON.stringify(this.props)}</h1>
      </div>
    );
  }
}

export default CounterPage