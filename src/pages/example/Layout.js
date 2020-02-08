import React, { Component } from 'react';
import { SidePanel } from './';

export default class Layout extends Component {
  render() {
    return (
      <div className="examples-layout">
        <SidePanel />
        <div className="examples-page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
