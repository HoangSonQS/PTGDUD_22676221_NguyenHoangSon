import React from 'react';
import './Modal.css';

const EditModal = ({ isOpen, onClose, onSave, user }) => {
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSave(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    user[name] = value;
  };

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
              defaultValue={user?.name || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              name="company"
              defaultValue={user?.company || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Order Value</label>
            <input
              type="number"
              name="orderValue"
              defaultValue={user?.orderValue || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Order Date</label>
            <input
              type="date"
              name="orderDate"
              defaultValue={user?.orderDate || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <input
              type="text"
              name="status"
              defaultValue={user?.status || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Avatar</label>
            <input
              type="text"
              name="avatar"
              defaultValue={user?.avatar || ''}
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

export default EditModal; 