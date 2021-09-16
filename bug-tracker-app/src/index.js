import React from 'react';
import ReactDOM from 'react-dom';

import appStore from './store';
import BugTracker from './bugs';
import Projects from './projects';
import { Provider } from 'react-redux';

import './index.css';

import reportWebVitals from './reportWebVitals';

import * as axios from 'axios';
window['axios'] = axios;

ReactDOM.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <h1>Bug Tracker</h1>
      <hr/>
      <Projects/>
      <BugTracker/>
    </React.StrictMode>
  </Provider>
    , document.getElementById('root')
)

/* 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* 
ES6 Modules
*/

/* 
import * as calculator from './calc';
console.log(calculator);
*/

/* 
import * as calculator from './calc';
const { add } = calculator;
console.log(add(100,200)); 
*/

/* 
import { add } from './calc';
console.log(add(100,200)); 
*/

//importing the default exported member
/* 
import calc from './calc'
console.log(calc.add(100,200));
*/

