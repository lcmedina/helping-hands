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
      <Route path='/user/create' element={<SignUp />} />
      <Route path='/user/login' element={<Login />} />
      <Route path='/user/location' element={<Location />} />
      <Route path='/user/donate' element={<Donate />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


