import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state'
import { BrowserRouter } from 'react-router-dom';
import {addPostMc} from './redux/state'
import {addPostDialogsPage} from './redux/state'
import {addPostUsedCars} from './redux/state'
import {updateTextDialogs} from './redux/state'
import {updateTextUsedCr} from './redux/state'


export let rerender = () => {
ReactDOM.render(
  <BrowserRouter>
     <React.StrictMode>
       <App state={state} addPostMc={addPostMc} 
       addPostDialogsPage={addPostDialogsPage}
       addPostUsedCars={addPostUsedCars}
       updateTextDialogs={updateTextDialogs}
       updateTextUsedCr={updateTextUsedCr} />
     </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
}
rerender()
subscribe(rerender)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
