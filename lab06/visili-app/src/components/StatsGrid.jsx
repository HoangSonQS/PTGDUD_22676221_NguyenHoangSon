import React from 'react';
import './StatsGrid.css';
import icon1 from "../assets/images/Button 1509.png"
import icon2 from "../assets/images/Button 1529.png"
import icon3 from "../assets/images/Button 1530.png"
import { useData } from './DataContext';

const StatsGrid = () => {
  const { stats, formatCurrency, handleButtonClick } = useData();

  if (stats.loading) {
    return <div className="stats-grid loading">Loading...</div>;
  }

  if (stats.error) {
    return <div className="stats-grid error">{stats.error}</div>;
  }

  return (
    <div className="stats-grid">
      <div 
        className="stat-card pink" 
        onClick={() => handleButtonClick('turnover')}
        style={{ cursor: 'pointer' }}
      >
        <div className="stat-content">
          <h3>Turnover</h3>
          <p className="stat-value">{formatCurrency(stats.turnover.current)}</p>
          <p className="stat-change">↑ {stats.turnover.change}% period of change</p>
        </div>
        <img src={icon1} alt="" />
      </div>

      <div 
        className="stat-card blue"
        onClick={() => handleButtonClick('profit')}
        style={{ cursor: 'pointer' }}
      >
        <div className="stat-content">
          <h3>Profit</h3>
          <p className="stat-value">{formatCurrency(stats.profit.current)}</p>
          <p className="stat-change">↑ {stats.profit.change}% period of change</p>
        </div>
        <img src={icon2} alt="" />
      </div>

      <div 
        className="stat-card light-blue"
        onClick={() => handleButtonClick('customers')}
        style={{ cursor: 'pointer' }}
      >
        <div className="stat-content">
          <h3>New customer</h3>
          <p className="stat-value">{stats.newCustomers.current}</p>
          <p className="stat-change">↑ {stats.newCustomers.change}% period of change</p>
        </div>
        <img src={icon3} alt="" />
      </div>
    </div>
  );
};

export default StatsGrid; 