import { weekDays } from './dictionaries/weekdays';

/**
 * Returns current date as a date object.
 * @return {Object} {day: Number, month: Number, year: Number, weekDay: String}
 */
export default function getDate() {
  const currentDate = new Date();

  return {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
    weekDay: weekDays[currentDate.getDay()]
  };
}
