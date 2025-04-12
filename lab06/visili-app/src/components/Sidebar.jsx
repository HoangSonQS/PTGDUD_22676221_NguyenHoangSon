import React from 'react';
import { NavLink } from 'react-router-dom';
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
    { title: 'Dashboard', path: '/', icon: dashboardIcon },
    { title: 'Projects', path: '/projects', icon: projectsIcon },
    { title: 'Teams', path: '/teams', icon: teamsIcon },
    { title: 'Analytics', path: '/analytics', icon: analyticsIcon },
    { title: 'Messages', path: '/messages', icon: messagesIcon },
    { title: 'Integrations', path: '/integrations', icon: integrationsIcon },
  ];

  return (
    <div className="sidebar w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="flex items-center mb-8 p-4">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <nav>
        <ul className="flex flex-col gap-1">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                <img src={item.icon} alt={item.title} className="w-5 h-5" />
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-banner mt-auto mx-4 mb-4 bg-blue-50 p-4 rounded-lg">
        <div className="banner-content flex flex-col items-center">
          <img src={v2Image} alt="V2.0" className="banner-image mb-2" />
          <h3 className="text-sm font-medium mb-2">V2.0 is available</h3>
          <button className="try-now-btn bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 