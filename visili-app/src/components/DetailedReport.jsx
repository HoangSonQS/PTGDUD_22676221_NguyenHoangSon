import React from 'react';
import './DetailedReport.css';

const DetailedReport = ({ orders }) => {
  return (
    <section className="detailed-report">
      <div className="report-header">
        <h2>Detailed report</h2>
        <div className="report-actions">
          <button className="btn">Import</button>
          <button className="btn">Export</button>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>CUSTOMER NAME</th>
              <th>COMPANY</th>
              <th>ORDER VALUE</th>
              <th>ORDER DATE</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td><input type="checkbox" /></td>
                <td>{order.customerName}</td>
                <td>{order.company}</td>
                <td>{order.orderValue}</td>
                <td>{order.orderDate}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <button className="edit-btn">✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DetailedReport; 