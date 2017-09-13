function convertToAnalog(time) {
  /* eslint-disable no-magic-numbers*/
  /* eslint-disable no-mixed-operators*/
  const seconds = time.seconds * 6;
  const minutes = time.minutes * 6;
  const hours = 30 * (time.hours % 12) + time.minutes * 0.5;
  /* eslint-enable no-mixed-operators*/
  /* eslint-enable no-magic-numbers*/
  const analogTime = {
    seconds,
    minutes,
    hours
  };

  return analogTime;
}

module.exports = function getTime(timeMode) {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  /* eslint-disable no-magic-numbers*/
  const hours12 = hours - (hours > 12 ? 12 : 0);
  const ampm = hours > 12 ? 'pm' : 'am';
  /* eslint-enable no-magic-numbers*/
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
};
