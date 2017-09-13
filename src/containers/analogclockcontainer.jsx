import React from 'react';
import ReactDOM from 'react-dom';
import { AnalogClock } from '../components/analogclock.jsx';

const clock = require('../clock');

export class AnalogClockContainer extends React.Component {
  constructor(props) {
    super(props);
    const time = clock.getTime('analog');

    this.state = {
      time: time
    };
    this.updateClocks = this.updateClocks.bind(this);
  }

  updateClocks() {
    const time = clock.getTime('analog');
    this.setState({time: time});
  }

  componentDidMount() {
    this.interval = setInterval(this.updateClocks, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <AnalogClock time={this.state.time}/>
      </div>
    );
  }
  };
