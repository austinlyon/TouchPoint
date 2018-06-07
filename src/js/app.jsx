import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello',
    };
  }
  render() {
    return (
      <div>
        <h1>TouchPoint</h1>
        <div>
          {this.state.message} from React!
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
