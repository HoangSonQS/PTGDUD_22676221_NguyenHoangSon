import React, { useState } from 'react';
import './Modal.css';

const ImportModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: '',
    avatar: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSave();
        onClose();
      }
    } catch (error) {
      console.error('Error saving customer:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit User</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Order Value</label>
            <input
              type="number"
              name="orderValue"
              value={formData.orderValue}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Order Date</label>
            <input
              type="date"
              name="orderDate"
              value={formData.orderDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Avatar</label>
            <input
              type="text"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
            />
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn-save">Save</button>
            <button type="button" className="btn-clone" onClick={onClose}>Clone</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImportModal; 