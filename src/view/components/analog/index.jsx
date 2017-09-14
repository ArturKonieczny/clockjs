import React from 'react';
import { AnalogClock } from './components/analogclock.jsx';
import { getTime } from '../../../engine';

/*Analog clock template. Self updating container*/
export class AnalogClockContainer extends React.Component {
  constructor(props) {
    super(props);
    const time = getTime('analog');

    this.state = {
      time: time
    };
    this.updateClocks = this.updateClocks.bind(this);
  }

  updateClocks() {
    const time = getTime('analog');
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
