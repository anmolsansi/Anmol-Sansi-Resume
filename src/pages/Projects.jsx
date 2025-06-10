// src/pages/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Resume Tracker',
    tech: 'Python, AWS Lambda, DynamoDB, React',
    description: 'A serverless web app to track job applications with resume uploads and follow-up reminders.',
    github: 'https://github.com/anmolsansi',
  },
  {
    title: 'The Movie Review App',
    tech: 'Java, Kotlin, Firebase, SQLite',
    description: 'An Android app using TMDB/OMDB APIs and Firebase for authentication and storage.',
    github: 'https://github.com/anmolsansi',
  },
  {
    title: 'Task Manager',
    tech: 'Python, Tkinter, SQLite',
    description: 'Desktop app for managing and searching tasks, with improved UX and offline support.',
    github: 'https://github.com/anmolsansi',
  },
  {
    title: 'Pharmacy Management System',
    tech: 'Java, React, SQL',
    description: 'Full-stack app for role-based access, inventory search, and sales performance tracking.',
    github: 'https://github.com/anmolsansi',
  },
];

const Projects = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-yellow-400 inline-block pb-1">
          Projects
        </h2>
      <h2 className="text-3xl font-bold">
      <a href="https://github.com/anmolsansi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Github</a></h2>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded dark:border-gray-600">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{project.tech}</p>
            <p className="mb-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;