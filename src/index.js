import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import { BrowserRouter } from 'react-router-dom';


export let rerender = () => {
ReactDOM.render(
  <BrowserRouter>
     <React.StrictMode>
       <App state={store._state} addPostMc={store.addPostMc.bind(store)} 
       addPostDialogsPage={store.addPostDialogsPage.bind(store)}


       dispatch={store.dispatch.bind(store)}
       


       updateTextDialogs={store.updateTextDialogs.bind(store)}
       updateTextMainContent={store.updateTextMainContent.bind(store)} />
     </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
}
rerender()
store.subscribe(rerender)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
