import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { AuthProvider } from './context/authContext.jsx';

const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={< Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

