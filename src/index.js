import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PasswordReset from './Pages/PasswordReset';

import SetNewPassword from './Pages/SetNewPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login/register' element={<Register />} />
        <Route path='/login/passwordreset' element={<PasswordReset />} />
        <Route path='/login/passwordreset/setnewpassword' element={<SetNewPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

