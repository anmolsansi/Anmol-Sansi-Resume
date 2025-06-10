// src/components/Sidebar.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import profileImage from '../assets/profile.jpeg';

const Sidebar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-full gap-6 h-fit">
      <div>
        <div className="text-center mt-10 mb-10">
          <img
            src={profileImage}
            alt="Anmol Sansi"
            className="w-24 h-24 rounded-full mx-auto border-2 border-blue-500 object-cover"
          />
          <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Anmol Sansi</h1>
          <span className="inline-block text-xl text-gray-500 dark:text-gray-300">Software Engineer</span>
          <div className="mt-3 flex justify-center space-x-4">
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
          </div>
        </div>

        <hr className="my-4 border-gray-300 dark:border-gray-700" />

        <div className="mt-10 text-sm text-center space-y-2 text-gray-600 dark:text-gray-300">
          <div className="flex items-center justify-center gap-2">
            <HiOutlineMail className="text-blue-500" />
            <a href="mailto:asansi0896@gmail.com" className="hover:underline">asansi0896@gmail.com</a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <HiOutlineLocationMarker className="text-blue-500" />
            <span>Chicago, IL</span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center mb-10">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;