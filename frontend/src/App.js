import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Sidebar from './Components/SideBar';
import CalendarPage from './pages/Calendar'; // Your Calendar page component
import AnalyticsPage from './pages/Analytics';
import ProfilePage from './pages/Profile';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: 16, overflow: 'hidden' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calendar" element={<CalendarPage />} />
            <Route path="/Analytics" element={<AnalyticsPage />} />
            <Route path="/Profile" element={<ProfilePage />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
