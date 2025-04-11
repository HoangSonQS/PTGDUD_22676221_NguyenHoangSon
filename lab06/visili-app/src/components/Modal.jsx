import React from 'react';

const Modal = ({ isOpen, onClose, onSave, user, onChange, title = "Edit User" }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-lg p-6 m-4 max-w-xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {user && Object.keys(user).map(field => {
            if (field === 'id') return null;
            
            return (
              <div key={field} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type="text"
                  name={field}
                  value={user[field] || ''}
                  onChange={onChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            );
          })}

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal; 