import React from 'react';
import { make2Digits } from '../../../utils';

/*Digital clock template*/
export const DigitalClock = (props) => {
  let hours;
  let ampm;
  if (props.timeFormat === '24h') {
    hours = make2Digits(props.time.hours);
  } else {
    hours = make2Digits(props.time.hours12);
    ampm = props.time.hours > 11 ? <span>PM</span> : <span>AM</span>
  }

  return (
    <div>
      <span>{hours}</span>
      <span>:</span>
      <span>{make2Digits(props.time.minutes)}</span>
      <span> </span>
      <span>{make2Digits(props.time.seconds)}</span>
      <span> </span>
      {ampm}
    </div>
  );

}
