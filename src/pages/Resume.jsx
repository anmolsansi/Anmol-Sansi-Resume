// src/pages/Resume.jsx
import React from 'react';
import { FaGraduationCap, FaBriefcase, FaTools } from 'react-icons/fa';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Java', level: 85 },
  { name: 'AWS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'NodeJS', level: 70 },
  { name: 'React', level: 75 },
  { name: 'SQL', level: 85 },
  { name: 'NoSQL', level: 90 },
];

const Resume = () => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-yellow-400 inline-block pb-1">
          Resume
        </h2>
      </div>

      {/* Education & Experience */}
      <div className="space-y-10 gap-8">
        {/* Education */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            <FaGraduationCap className="inline-block mr-2 text-blue-500" />
            Education
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                Illinois Institute of Technology
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">2023 – 2024</span>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Masters in Information Technology and Management<br />
                GPA: 4.0 / 4.0
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                Delhi Technological University
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">2023 – 2024</span>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Bachelors of Technology in Electronics and Communication Engineering<br />
              </p>
            </div>
          </div>
        </div>
        <br></br>
        {/* Experience */}
        <div className="mt-16 mb-16">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            <FaBriefcase className="inline-block mr-2 text-blue-500" />
            Experience
          </h3>
          <div className="space-y-6">
            {[
              {
  title: 'Software Engineer Intern',
  company: 'Radical AI',
  duration: 'Aug 2024 – Feb 2025',
  details:
    'Developed AI-driven tools for flight and quiz management using Google Gemini and NLP. Improved user engagement and search relevance by 20% through real-time interaction platforms and intelligent query handling.',
},
{
  title: 'Teaching Assistant (Java)',
  company: 'Illinois Institute of Technology',
  duration: 'Sept 2023 – May 2024',
  details:
    'Led Java-focused learning sessions for over 100 students. Streamlined class support using data analysis with Excel and Power BI, improving engagement strategies by 25% and ensuring tailored academic assistance.',
},
{
  title: 'Associate Software Engineer',
  company: 'S&P Global',
  duration: 'Jul 2019 – Dec 2022',
  details:
    'Engineered 100+ backend APIs in Java and Python. Boosted performance by 50%, built AWS-based ETL pipelines, and optimized large datasets across distributed systems. Reduced costs by 15% while ensuring 99.9% service uptime.',
},
{
  title: 'Software Engineer Intern',
  company: 'Intellect Design Arena',
  duration: 'Jun 2018 – Jul 2018',
  details:
    'Redesigned UI for India’s Government E-Marketplace (GeM). Reduced API testing time by 70% through Selenium and Java-based automation, improving platform stability and performance in collaboration with a 12-member QA team.',
}
            ].map((job, i) => (
              <div key={i}>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{job.title}</h4>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {job.company} • {job.duration}
                </div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{job.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <br></br>
      <div>
        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          <FaTools className="inline-block mr-2 text-blue-500" />
        My Skills</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
        <br></br>

      <div className="text-right mt-16 mb-16">
  <a
    href="/Anmol_Sansi_CV.pdf"
    download
    className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
  >
    Download Resume
  </a>
</div>
    </div>
  );

};

export default Resume;
