// src/components/TopNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'About', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const TopNav = () => {
  return (
    <nav className="flex justify-end space-x-6 mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
      {links.map(link => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `px-4 py-1 text-m font-medium rounded ${
              isActive
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-yellow-300'
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default TopNav;