import React, { useState, useEffect, useMemo } from 'react';
import { useData } from './DataContext';
import Modal from './Modal';
import './DetailedReport.css';

const DetailedReport = ({
  itemsPerPage = 5,
  avatarField = 'avatar',
  statusField = "status",
  currencyFields = ['amount', 'orderValue'],
  dateFields = ['orderDate'],
  excludeFields = ['avatar'],
  nameField = 'name'
}) => {
  const { 
    tableData, 
    tableTitle, 
    updateData, 
    fetchStats, 
    activeFilter,
    loading,
    error 
  } = useData();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({});
  const [lastFetchedFilter, setLastFetchedFilter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Only fetch if activeFilter has changed and is different from last fetch
      if (activeFilter && activeFilter !== lastFetchedFilter) {
        try {
          setLastFetchedFilter(activeFilter);
          setCurrentPage(1); // Reset to page 1 when filter changes
          let endpoint = '';
          switch (activeFilter) {
            case 'turnover':
              endpoint = 'turnover';
              break;
            case 'profit':
              endpoint = 'profit';
              break;
            case 'customers':
              endpoint = 'customers';
              break;
            default:
              return;
          }
          const response = await fetch(`http://localhost:3001/${endpoint}`);
          const data = await response.json();
          updateData(data);
        } catch (err) {
          console.error('Error fetching data:', err);
        }
      }
    };

    fetchData();
  }, [activeFilter, lastFetchedFilter, updateData]);

  const currentItems = useMemo(() => {
    if (!tableData || tableData.length === 0) {
      return [];
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return tableData.slice(indexOfFirstItem, indexOfLastItem);
  }, [tableData, currentPage, itemsPerPage]);

  const totalPages = useMemo(() => {
    return tableData && tableData.length > 0 ? Math.ceil(tableData.length / itemsPerPage) : 0;
  }, [tableData, itemsPerPage]);

  if (loading) {
    return <div className={`${activeFilter}-report loading`}>Loading...</div>;
  }

  if (error) {
    return <div className={`${activeFilter}-report error`}>{error}</div>;
  }

  if (!tableData || tableData.length === 0) {
    return <div className={`${activeFilter}-report`}>No data available</div>;
  }

  const getColumns = () => {
    switch (activeFilter) {
      case 'turnover':
        return ['id', 'month', 'amount', 'change'];
      case 'profit':
        return ['id', 'month', 'amount', 'margin'];
      case 'customers':
      default:
        return Object.keys(tableData[0]).filter(
          column => !excludeFields.includes(column)
        );
    }
  };

  const columns = getColumns();

  const formatCurrency = (value) => {
    if (isNaN(value)) return value;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercentage = (value) => {
    if (isNaN(value)) return value;
    return `${value}%`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch {
      return dateString;
    }
  };

  const renderCellContent = (column, item) => {
    const value = item[column];

    if (column === nameField && item[avatarField]) {
      return (
        <div className="name-cell">
          <img 
            src={`http://localhost:3001${item[avatarField]}`} 
            alt="" 
            className="avatar"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/default-avatar.png';
            }}
          />
          <span>{value}</span>
        </div>
      );
    }

    if (column === statusField) {
      return (
        <span className={`status ${value?.toLowerCase()}`}>
          {value}
        </span>
      );
    }

    if (column === 'amount') {
      return formatCurrency(value);
    }

    if (column === 'change' || column === 'margin') {
      return formatPercentage(value);
    }

    if (dateFields.includes(column)) {
      return formatDate(value);
    }

    return value !== null && value !== undefined ? value.toString() : '';
  };

  const formatColumnName = (column) => {
    return column
      .replace(/([A-Z])/g, ' $1')
      .replace(/_/g, ' ')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleImport = () => {
    if (activeFilter !== 'customers') {
      alert('Import is only available for customer data');
      return;
    }
    const emptyCustomer = Object.keys(tableData[0]).reduce((acc, key) => {
      if (key !== 'id') {
        acc[key] = '';
      }
      return acc;
    }, {});
    setNewCustomer(emptyCustomer);
    setIsImportModalOpen(true);
  };

  const handleExport = () => {
    const data = tableData;
    const csvContent = "data:text/csv;charset=utf-8," + 
      columns.map(formatColumnName).join(",") + "\n" +
      data.map(row => 
        columns.map(col => {
          let value = row[col];
          if (col === 'amount') {
            value = row[col].toString();
          }
          if (col === 'change' || col === 'margin') {
            value = `${row[col]}%`;
          }
          return value;
        }).join(",")
      ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${tableTitle.toLowerCase().replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (e) => {
    setSelectedItem({
      ...selectedItem,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async (updatedUser) => {
    try {
      if (!updatedUser || !updatedUser.id) {
        throw new Error('No user ID provided for update');
      }

      const payload = { ...updatedUser };
      if (payload.avatar && payload.avatar.startsWith('http://localhost:3001')) {
        payload.avatar = payload.avatar.replace('http://localhost:3001', '');
      }

      const response = await fetch(`http://localhost:3001/customers/${updatedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      const updatedData = await response.json();
      updateData(tableData.map(item => item.id === updatedData.id ? updatedData : item));
      setIsModalOpen(false);
      setSelectedItem(null);
    } catch (error) {
      console.error('Error saving user:', error);
      alert('Failed to save user. Please try again.');
    }
  };

  const handleImportChange = (e) => {
    setNewCustomer({
      ...newCustomer,
      [e.target.name]: e.target.value
    });
  };

  const handleImportSave = async (newUser) => {
    try {
      const response = await fetch('http://localhost:3001/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error('Failed to create new customer');
      }

      const createdUser = await response.json();
      updateData([...tableData, createdUser]);
      setIsImportModalOpen(false);
      setNewCustomer({});
    } catch (error) {
      console.error('Error importing customer:', error);
      alert('Failed to import customer. Please try again.');
    }
  };

  return (
    <div className={`${activeFilter}-report detailed-report`}>
      <div className="report-header">
        <h2>
          {activeFilter === 'turnover' ? 'Turnover Report' :
           activeFilter === 'profit' ? 'Profit Report' :
           activeFilter === 'customers' ? 'Customer Report' :
           'Detailed Report'}
        </h2>
        <div className="report-actions">
          {activeFilter === 'customers' && (
            <button onClick={handleImport} className="btn btn-import">
              <span>↓</span> Import
            </button>
          )}
          <button onClick={handleExport} className="btn btn-export">
            <span>↑</span> Export
          </button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                {Object.keys(item).map((key) => {
                  if (excludeFields.includes(key)) return null;
                  return (
                    <td key={key}>
                      {renderCellContent(key, item)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {tableData.length > itemsPerPage && (
        <div className="pagination">
          <div className="pagination-info">
            Showing 1 to 5 of {tableData.length} entries
          </div>
          <div className="pagination-controls">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="nav-btn"
            >
              {"<"}
            </button>

            {Array.from({ length: Math.min(6, totalPages) }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={currentPage === number ? 'active' : ''}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="nav-btn"
            >
              {">"}
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          user={selectedItem}
          onChange={handleChange}
        />
      )}
      
      {isImportModalOpen && (
        <Modal
          isOpen={isImportModalOpen}
          onClose={() => setIsImportModalOpen(false)}
          onSave={handleImportSave}
          user={newCustomer}
          onChange={handleImportChange}
          title="Add New Customer"
        />
      )}
    </div>
  );
};

export default DetailedReport; 