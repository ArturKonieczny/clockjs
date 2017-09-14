import React from 'react';
import { rotate } from '../../../utils';

/* Analog clock template */
export const AnalogClock = (props) => {
  return (
    <div>
      <div className="shield">
        <img src="shield.png" />
      </div>
      <div className="hours" style={rotate(props.time.hours)}>
        <img src="hours.png" />
      </div>
      <div className="minutes" style={rotate(props.time.minutes)}>
        <img src="minutes.png" />
      </div>
      <div className="seconds" style={rotate(props.time.seconds)}>
        <img src="seconds.png" />
      </div>
    </div>
  );
}
