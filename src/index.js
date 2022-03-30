import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from './App';
import { 
  SignUp, 
  TitleBar, 
  Login, 
  Location,
  Donate } from './components/CompIndex'

ReactDOM.render(
  <BrowserRouter>
    <TitleBar/>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/create' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/location' element={<Location />} />
      <Route path='/donate' element={<Donate />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


