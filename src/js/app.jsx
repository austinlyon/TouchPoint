import React, { Component } from 'react';
import { render } from 'react-dom';
import ContactForm from './components/ContactForm';

import '../css/style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello',
      entries: [],
    };

    this.storeEntry = this.storeEntry.bind(this);
  }

  storeEntry(name, frequency, frequencyScale) {
    const newEntry = {
      name,
      frequency,
      frequencyScale,
    };
    this.setState({
      entries: this.state.entries.concat([newEntry]),
    });
  }

  render() {
    const entriesPrinted = this.state.entries.map(x => x.name).toString();

    return (
      <div>
        <h1>TouchPoint</h1>
        <div>
          <p>{this.state.message} from React!</p>
        </div>
        <ContactForm storeEntry={this.storeEntry} />
        <div>{entriesPrinted}</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
