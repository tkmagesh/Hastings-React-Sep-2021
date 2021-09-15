import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import bugActionCreators from './bugs/actions';
import appStore from './store';
import BugTracker from './bugs';
import './index.css';

import reportWebVitals from './reportWebVitals';


const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);

function renderApp(){
    const bugs = appStore.getState();
    ReactDOM.render(
        <React.StrictMode>
          <h1>Bug Tracker</h1>
          <hr/>
          <BugTracker bugs={bugs} {...bugActionDispatchers}/>
        </React.StrictMode>
        , document.getElementById('root')
    )
}

renderApp();
appStore.subscribe(renderApp);
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

