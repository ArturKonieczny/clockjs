/**
 * Rotates element clockwise by given angle.
 * @param  {Number} angle Rotation angle
 * @return {Object}       Style/CSS 
 */
export default function rotate(angle) {
  return {
    WebkitTransform: `rotate(${angle}deg)`,
    MozTransform: `rotate(${angle}deg)`,
    MsTransform: `rotate(${angle}deg)`,
    OTransform: `rotate(${angle}deg)`,
    Transform: `rotate(${angle}deg)`
  };
}
