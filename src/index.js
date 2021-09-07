import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './contexts/FirebaseContext.js'
import {firebase} from './firebase';
import "./components/index.css";



ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value ={{firebase}}>
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

