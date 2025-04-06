import React from 'react';
import './Sidebar.css';
import v2Image from '../assets/images/group.png'
import logo from '../assets/images/Image 1858.png'
import dashboardIcon from '../assets/images/Squares four 1.png';
import projectsIcon from '../assets/images/Folder.png';
import teamsIcon from '../assets/images/Groups.png';
import analyticsIcon from '../assets/images/Pie chart.png';
import messagesIcon from '../assets/images/Chat.png';
import integrationsIcon from '../assets/images/Code.png';

const Sidebar = () => {
  const sidebarItems = [
    { title: 'Dashboard', path: '/', icon: dashboardIcon, active: true },
    { title: 'Projects', path: '/projects', icon: projectsIcon },
    { title: 'Teams', path: '/teams', icon: teamsIcon },
    { title: 'Analytics', path: '/analytics', icon: analyticsIcon },
    { title: 'Messages', path: '/messages', icon: messagesIcon },
    { title: 'Integrations', path: '/integrations', icon: integrationsIcon },
  ];

  return (
    <div className="sidebar w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="flex items-center mb-8">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
      <nav>
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.path} className={item.active ? 'active' : ''}>
              <img src={item.icon} alt={item.title} className="nav-icon" />
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-banner">
        <div className="banner-content">
          <img src={v2Image} alt="V2.0" className="banner-image" />
          <h3>V2.0 is available</h3>
          <button className="try-now-btn">Try now</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 