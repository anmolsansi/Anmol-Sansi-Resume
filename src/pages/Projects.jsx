import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Resume Tracker – Serverless Web App',
    tech: ['Python', 'Flask', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'SES'],
    description:
      'Serverless backend to track job applications with REST APIs and DynamoDB CRUD. Stores resumes/CL in S3 and uses SES/CloudWatch for weekly follow-up email alerts.',
    //github: 'https://github.com/anmolsansi', // replace with repo when ready
  },
  {
    title: 'The Movie Review – Android Application',
    tech: ['Java', 'Kotlin', 'TMDB API', 'OMDB API', 'Firebase Auth', 'YouTube Web API', 'SQLite'],
    description:
      'Android app integrating TMDB/OMDB (10k+ titles) with trailer playback and a favorites feature (+25% retention). Firebase for auth (~500 users) and SQLite for offline access.',
    //github: 'https://github.com/anmolsansi', // replace with repo when ready
  },
  {
    title: 'AI Job Application Tracker',
    tech: ['Python', 'OpenAI API', 'Gmail API', 'PostgreSQL', 'Pandas'],
    description:
      'Automates tracking by parsing 200+ Gmail application emails with AI to extract roles, statuses, and notes. Cuts manual tracking time by ~80% and centralizes data in Postgres.',
    //github: 'https://github.com/anmolsansi', // replace with repo when ready
  },
  {
    title: 'Pharmacy Management System – Desktop/Web',
    tech: ['Java', 'PostgreSQL', 'JSP', 'Maven', 'JavaScript', 'React'],
    description:
      'Role-based auth, REST APIs, and React UI with real-time filtering and validation. ~30% faster responses, ~40% backend performance gain, and ~20% downtime reduction.',
    //github: 'https://github.com/anmolsansi', // replace with repo when ready
  },
];

const Projects = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-yellow-400 inline-block pb-1">
          Projects
        </h2>
        <a
          href="https://github.com/anmolsansi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gray-900 text-white dark:bg-blue-600 hover:opacity-90"
        >
          <FaGithub /> View GitHub
        </a>
      </div>

      {/* Stacked cards */}
      <div className="flex flex-col gap-8">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>

            {/* Tech tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{p.description}</p>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap gap-3">
{/*               <a */}
{/*                 href={p.github} */}
{/*                 target="_blank" */}
{/*                 rel="noopener noreferrer" */}
{/*                 className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700" */}
{/*               > */}
{/*                 <FaGithub /> GitHub */}
{/*               </a> */}
              {/* If you have a live demo later, add it like this:
              <a
                href="https://your-demo-url"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Live Demo
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
