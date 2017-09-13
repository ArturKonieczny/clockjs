import React from 'react';
import ReactDOM from 'react-dom';
import { DigitalClock } from '../components/digitalclock.jsx';
import { TimeFormatPicker } from '../components/timeformatpicker.jsx';

const clock = require('../clock');

export class DigitalClockContainer extends React.Component {
  constructor(props) {
    super(props);
    const time = clock.getTime('digital');
    this.state = {
      time: time,
      timeFormat: '24h'
    };
    this.updateClocks = this.updateClocks.bind(this);
    this.changeTimeFormat = this.changeTimeFormat.bind(this);
  }

  updateClocks() {
    const time = clock.getTime('digital');
    this.setState({time: time});
  }

  componentDidMount() {
    this.interval = setInterval(this.updateClocks, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeTimeFormat(newTimeFormat) {
    this.setState({timeFormat: newTimeFormat});
  }

  render() {
    return (
      <div>
        <DigitalClock time={this.state.time} timeFormat={this.state.timeFormat}/>
        <TimeFormatPicker onChange={this.changeTimeFormat}/>
      </div>
    );
  };
}
