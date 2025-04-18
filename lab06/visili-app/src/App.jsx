import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import DetailedReport from './components/DetailedReport';
import { DataProvider } from './components/DataContext';

function App() {
  return (
    <Router>
      <DataProvider>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Header />
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={
                  <>
                    <section className="overview">
                      <h2 className="text-2xl font-semibold mb-6">Overview</h2>
                      <StatsGrid />
                    </section>
                    <DetailedReport />
                  </>
                } />
                <Route path="/projects" element={<div>Projects Page</div>} />
                <Route path="/teams" element={<div>Teams Page</div>} />
                <Route path="/analytics" element={<div>Analytics Page</div>} />
                <Route path="/messages" element={<div>Messages Page</div>} />
                <Route path="/integrations" element={<div>Integrations Page</div>} />
              </Routes>
            </div>
          </div>
        </div>
      </DataProvider>
    </Router>
  );
}

export default App;
