import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const element = React.createElement("div", { a: 5, b: 10, children: "Hello world" });
// console.log(element);

// ReactDOM.render(element, document.querySelector("#root"));
