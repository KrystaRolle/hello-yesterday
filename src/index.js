import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HelloYesterday } from './components/helloYesterday.js/HelloYesterday';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HelloYesterday />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//browserrouter keeps UI in sync with URL 
//is a standard library for routing in React that allows URL to be changed
//root is HTML element to display the results
