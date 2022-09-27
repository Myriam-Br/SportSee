import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import NavBarH from './components/NavBarHorizontal';
import NavBarV from './components/NavBarVertical';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <header>
        <NavBarH/>
        <NavBarV/>  
  </header>
  <Routes>
    <Route path="/user/:id" element={<App/>}/>
    <Route path="*" element={<Error/>} />
  </Routes>
  </BrowserRouter> 
</React.StrictMode>
);

reportWebVitals();
