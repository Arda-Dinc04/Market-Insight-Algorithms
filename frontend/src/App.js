import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Sidebar from './Components/Sidebar';
import CalendarPage from './pages/Calendar'; // Your Calendar page component
import AnalyticsPage from './pages/Analytics';
import ProfilePage from './pages/Profile';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import ForgotPassword from './Authentication/ForgotPassword';
import Home from './pages/Home';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar authenticated={authenticated} />
        <div style={{ flexGrow: 1, padding: 16, overflow: 'hidden' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn setAuthenticated={setAuthenticated} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/profile"
              element={authenticated ? <ProfilePage /> : <Navigate to="/signin" />}
            />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
