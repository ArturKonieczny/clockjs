import React from 'react';
import { ClockPicker } from './components/clockpicker.jsx';
import { DigitalClockContainer } from './components/digital/index.jsx';
import { AnalogClockContainer } from './components/analog/index.jsx';

/*Main clock template*/
export default class ClockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockType: 'digital',
    };
    this.changeClockType = this.changeClockType.bind(this);
  }

  changeClockType(newClockType) {
    this.setState({clockType: newClockType });
  }

  render() {
    let clock;
    if (this.state.clockType === 'digital') {
      clock = <DigitalClockContainer />;
    } else {
      clock = <AnalogClockContainer />
    }
    return (
      <div>
        <ClockPicker onChange={this.changeClockType}/>
        {clock}
      </div>
    );
  };
}
