import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsGrid from './components/StatsGrid'
import DetailedReport from './components/DetailedReport'

function App() {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Elizabeth Lee', company: 'AvatarSystems', orderValue: '$559', orderDate: '10/07/2023', status: 'New' },
    { id: 2, customerName: 'Carlos Garcia', company: 'SmoozeShift', orderValue: '$747', orderDate: '24/07/2023', status: 'New' },
    { id: 3, customerName: 'Elizabeth Bailey', company: 'Prime Time Telecom', orderValue: '$564', orderDate: '08/08/2023', status: 'In progress' },
    { id: 4, customerName: 'Ryan Brown', company: 'OmniTechCorporation', orderValue: '$541', orderDate: '31/08/2023', status: 'In progress' },
    { id: 5, customerName: 'Ryan Young', company: 'DataStream Inc.', orderValue: '$769', orderDate: '01/09/2023', status: 'Completed' },
    { id: 6, customerName: 'Hailey Adams', company: 'FlowRush', orderValue: '$922', orderDate: '10/06/2023', status: 'Completed' },
  ])

  return (
    <div className="app">
      <Sidebar />
      <Header />
      <div className="main-content">
        <section className="overview">
          <h2>Overview</h2>
          <StatsGrid />
        </section>
        <DetailedReport orders={orders} />
      </div>
    </div>
  )
}

export default App
