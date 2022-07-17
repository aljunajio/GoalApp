import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
          <div className='container pt-4'>
       
          <Routes>
              <Route exact path="/" element={<Dashboard />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
          </Routes>
               
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
