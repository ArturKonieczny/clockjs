import React from 'react';
import ReactDOM from 'react-dom';

export class ClockPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleClockChange = this.handleClockChange.bind(this);
  }

  handleClockChange(e){
    const clockType = e.target.value;
    this.props.onChange(clockType);
  }
  render() {
    return (
      <div>
        <select onChange={this.handleClockChange}>
          <option value="digital">
            Digital
          </option>
          <option value="analog">
            Analog
          </option>
        </select>
      </div>
    );
  }
}
