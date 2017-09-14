const secMinAdj = 6;
const hoursCount = 12;
const hoursAdj = 30;
const hoursMinAdj = 0.5;

/**
 * Converts numeric values to analog clock angle values.
 * @param  {Object} time {hours: Number, minutes: Number, seconds: Number}
 * @return {Object}      {hours: Number, minutes: Number, seconds: Number}
 */

function convertToAnalog(time) {
  const seconds = time.seconds * secMinAdj;
  const minutes = time.minutes * secMinAdj;
  /* eslint-disable no-mixed-operators*/
  const hours = hoursAdj * (time.hours % hoursCount) + time.minutes * hoursMinAdj;
  /* eslint-enable no-mixed-operators*/
  const analogTime = {
    seconds,
    minutes,
    hours
  };

  return analogTime;
}

/**
 * Returns current time as a time Object.
 * @param  {String} timeMode analog/digital
 * @return {Object}          {hours: Number, hours12: Number, minutes: Number, seconds: Number, ampm: String}
 */
export default function getTime(timeMode) {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const hours12 = hours - (hours > hoursCount ? hoursCount : 0);
  const ampm = hours > hoursCount ? 'pm' : 'am';
  const time = {
    hours,
    hours12,
    ampm,
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds()
  };

  if (timeMode === 'analog') {
    return convertToAnalog(time);
  }

  return time;
}
