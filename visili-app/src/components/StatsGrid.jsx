import React from 'react';
import './StatsGrid.css';

const StatsGrid = () => {
  return (
    <div className="stats-grid">
      <div className="stat-card pink">
        <div className="stat-content">
          <h3>Turnover</h3>
          <p className="stat-value">$92,405</p>
          <p className="stat-change">↑ 5.39% period of change</p>
        </div>
        <div className="stat-icon">🛒</div>
      </div>
      <div className="stat-card blue">
        <div className="stat-content">
          <h3>Profit</h3>
          <p className="stat-value">$32,218</p>
          <p className="stat-change">↑ 5.39% period of change</p>
        </div>
        <div className="stat-icon">💰</div>
      </div>
      <div className="stat-card light-blue">
        <div className="stat-content">
          <h3>New customer</h3>
          <p className="stat-value">298</p>
          <p className="stat-change">↑ 6.84% period of change</p>
        </div>
        <div className="stat-icon">👥</div>
      </div>
    </div>
  );
};

export default StatsGrid; 