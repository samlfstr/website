import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PathsMenuItems} from "./components/header/PathsMenuItems.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PathsMenuItems />
  </React.StrictMode>
)