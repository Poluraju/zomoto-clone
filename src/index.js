import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BiryaniItems from './Components/BiryaniItems';
import Starters  from './Components/Starters';
import CurriesRoties from './Components/CurriesRoties';
import { Desserts } from './Components/Desserts';
import Navigation from './Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Navigation/>
  <Routes>
<Route path='/' element={<BiryaniItems/>}/>
<Route path='/starters' element={<Starters/>}/>
<Route path='/curriesroties' element={<CurriesRoties/>}/>
<Route path='/desserts' element={<Desserts/>}/>

  </Routes>

  </BrowserRouter>
  
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
