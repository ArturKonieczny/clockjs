import React from 'react';
import ReactDOM from 'react-dom';

export class TimeFormatPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleTimeFormatChange = this.handleTimeFormatChange.bind(this);
  }

  handleTimeFormatChange(e){
    const timeFormat = e.target.value;
    this.props.onChange(timeFormat);
  }
  render() {
    return (
      <div>
        <select onChange={this.handleTimeFormatChange}>
          <option value="24h">
            24h
          </option>
          <option value="ampm">
            AM/PM
          </option>
        </select>
      </div>
    );
  }
}
