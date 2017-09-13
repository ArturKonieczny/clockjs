import React from 'react';
import ReactDOM from 'react-dom';
const { rotate } = require('../tools');
export class AnalogClock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="shield">
          <img src="shield.png" />
        </div>
        <div className="hours" style={rotate(this.props.time.hours)}>
          <img src="hours.png" />
        </div>
        <div className="minutes" style={rotate(this.props.time.minutes)}>
          <img src="minutes.png" />
        </div>
        <div className="seconds" style={rotate(this.props.time.seconds)}>
          <img src="seconds.png" />
        </div>
      </div>
    );
  }
}
