require('./style.scss');
require('./files');
import React from 'react';
import ReactDOM from 'react-dom';
import { ClockContainer } from './containers/clockcontainer.jsx';

ReactDOM.render(<ClockContainer />, document.querySelector('#app'));
