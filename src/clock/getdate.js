const weekDays = require('./dictionaries/weekdays');

module.exports = function getDate() {
  const currentDate = new Date();

  return {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
    weekDay: weekDays[currentDate.getDay()]
  };
};
