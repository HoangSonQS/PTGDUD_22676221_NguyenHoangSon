import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import DetailedReport from './components/DetailedReport';
import { DataProvider } from './components/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content-wrapper">
            <section className="overview">
              <h2 className="text-2xl font-semibold mb-6">Overview</h2>
              <StatsGrid />
            </section>
            <DetailedReport />
          </div>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
