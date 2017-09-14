import React from 'react';
import { DigitalClock } from './components/digitalclock.jsx';
import { TimeFormatPicker } from './components/timeformatpicker.jsx';
import { getTime } from '../../../engine/';

/*Digital clock template. Self updating container*/
export class DigitalClockContainer extends React.Component {
  constructor(props) {
    super(props);
    const time = getTime('digital');
    this.state = {
      time: time,
      timeFormat: '24h'
    };
    this.updateClocks = this.updateClocks.bind(this);
    this.changeTimeFormat = this.changeTimeFormat.bind(this);
  }

  updateClocks() {
    const time = getTime('digital');
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
