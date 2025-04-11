import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [stats, setStats] = useState({
    loading: true,
    error: null,
    turnover: {
      current: 50000,
      previous: 45000,
      change: 11.11
    },
    profit: {
      current: 15000,
      previous: 12000,
      change: 25
    },
    newCustomers: {
      current: 45,
      previous: 30,
      change: 50
    }
  });

  const [tableData, setTableData] = useState([]);
  const [tableTitle, setTableTitle] = useState('Detailed Report');
  const [activeFilter, setActiveFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCustomers = async () => {
    try {
      const response = await fetch('http://localhost:3001/customers');
      if (!response.ok) {
        throw new Error('Failed to fetch customers');
      }
      const data = await response.json();
      setTableData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchStats = async () => {
    try {
      setLoading(true);
      // Fetch turnover data
      const turnoverResponse = await fetch('http://localhost:3001/turnover');
      const turnoverData = await turnoverResponse.json();
      
      // Fetch profit data
      const profitResponse = await fetch('http://localhost:3001/profit');
      const profitData = await profitResponse.json();
      
      // Fetch customers for counting new ones
      const customersResponse = await fetch('http://localhost:3001/customers');
      const customersData = await customersResponse.json();
      
      // Calculate current stats
      const currentTurnover = turnoverData[turnoverData.length - 1]?.amount || 50000;
      const previousTurnover = turnoverData[turnoverData.length - 2]?.amount || 45000;
      
      const currentProfit = profitData[profitData.length - 1]?.amount || 15000;
      const previousProfit = profitData[profitData.length - 2]?.amount || 12000;
      
      const newCustomers = customersData.filter(c => c.status === 'New').length;
      const previousNewCustomers = 30; // This could be calculated based on historical data

      setStats({
        loading: false,
        error: null,
        turnover: {
          current: currentTurnover,
          previous: previousTurnover,
          change: ((currentTurnover - previousTurnover) / previousTurnover * 100).toFixed(2)
        },
        profit: {
          current: currentProfit,
          previous: previousProfit,
          change: ((currentProfit - previousProfit) / previousProfit * 100).toFixed(2)
        },
        newCustomers: {
          current: newCustomers,
          previous: previousNewCustomers,
          change: ((newCustomers - previousNewCustomers) / previousNewCustomers * 100).toFixed(2)
        }
      });
      
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const updateData = (newData) => {
    setTableData(newData);
  };

  const handleButtonClick = (filter) => {
    setActiveFilter(filter);
    // You can add additional filtering logic here if needed
  };

  useEffect(() => {
    Promise.all([fetchStats(), fetchCustomers()]);
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <DataContext.Provider value={{ 
      stats, 
      formatCurrency,
      tableData,
      tableTitle,
      updateData,
      fetchStats,
      activeFilter,
      handleButtonClick,
      loading,
      error
    }}>
      {children}
    </DataContext.Provider>
  );
}; 