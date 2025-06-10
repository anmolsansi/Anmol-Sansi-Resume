// src/components/Sidebar.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Sidebar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col justify-between min-h-screen">
      <div>
        <div className="text-center mb-6">
          <img
            src="https://avatars.githubusercontent.com/u/37709578?v=4"
            alt="Avatar"
            className="w-20 h-20 rounded-full mx-auto border-2 border-blue-500"
          />
          <h1 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Anmol Sansi</h1>
          <span className="inline-block text-sm text-gray-500 dark:text-gray-300">Software Engineer</span>
        </div>

        <nav className="space-y-3">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === path
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <a
          href="https://github.com/anmolsansi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/anmol-sansi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
        >
          <FaLinkedin size={20} />
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
