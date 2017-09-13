import React from 'react';
import ReactDOM from 'react-dom';

const { make2Digits } = require('../tools');

export class DigitalClock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hours;
    let ampm = '';
    if (this.props.timeFormat === '24h') {
      hours = make2Digits(this.props.time.hours);
    } else {
      hours = make2Digits(this.props.time.hours12);
      ampm = this.props.time.hours > 11 ? <span>PM</span> : <span>AM</span>
    }
    return (
      <div>
        <span>{hours}</span>
        <span>:</span>
        <span>{make2Digits(this.props.time.minutes)}</span>
        <span> </span>
        <span>{make2Digits(this.props.time.seconds)}</span>
        <span> </span>
        {ampm}
      </div>
    );
  }
}
