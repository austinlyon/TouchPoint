import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      frequencyNumber: '',
      frequencyScale: 'weeks',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFrequencyNumberChange = this.handleFrequencyNumberChange.bind(this);
    this.handleFrequencyScaleChange = this.handleFrequencyScaleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* ------------------------------------ */
  /* ----       Event Handlers       ---- */
  /* ------------------------------------ */
  handleNameChange(e) {
    this.setState({ contactName: e.target.value });
  }

  handleFrequencyNumberChange(e) {
    this.setState({ frequencyNumber: e.target.value });
  }

  handleFrequencyScaleChange(e) {
    this.setState({ frequencyScale: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.storeEntry(
      this.state.contactName,
      this.state.frequencyNumber,
      this.state.frequencyScale,
    );
  }

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */
  render() {
    return (
      <div>
        <form id="contactForm" onSubmit={this.handleSubmit}>
          <span>Keep in touch with </span>
          <input
            type="text"
            value={this.state.contactName}
            placeholder="New Contact"
            onChange={this.handleNameChange}
          />
          <span> every </span>
          <input
            type="text"
            value={this.state.frequencyNumber}
            placeholder="#"
            onChange={this.handleFrequencyNumberChange}
          />
          <select
            value={this.state.frequencyScale}
            onChange={this.handleFrequencyScaleChange}
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
          </select>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  storeEntry: PropTypes.func.isRequired,
};
