import React from 'react';
import { Link } from 'react-router-dom';

const SidePanel = () => (
  <div className="examples-side-panel">
    <ul>
      <li>
        <Link to="/examples">Welcome</Link>
      </li>
      <li>
        <Link to="/examples/counter">Counter Demo</Link>
      </li>
    </ul>
    <div className="memo">
      Welcome.
    </div>
  </div>
)

export default SidePanel