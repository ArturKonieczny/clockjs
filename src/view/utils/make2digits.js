/**
 * Simple function for time output formating.
 * @param  {Number} input Value to be formated (extended to two digits).
 * @return {String}       Formated value.
 */
export default function make2Digits(input) {
  const digitToAdd = input < 10 ? '0' : '';

  return `${digitToAdd}${input}`;
}
