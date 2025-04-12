import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DataProvider } from './components/DataContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import DetailedReport from './components/DetailedReport';

const AppRouter = () => {
  return (
    <Router>
      <DataProvider>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Header />
            <div className="content">
              <StatsGrid />
              <Routes>
                <Route path="/" element={<DetailedReport />} />
                <Route path="/projects" element={<div>Projects Page</div>} />
                <Route path="/teams" element={<div>Teams Page</div>} />
                <Route path="/analytics" element={<div>Analytics Page</div>} />
                <Route path="/messages" element={<div>Messages Page</div>} />
                <Route path="/integrations" element={<div>Integrations Page</div>} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      </DataProvider>
    </Router>
  );
};

export default AppRouter; 