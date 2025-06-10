// src/pages/About.jsx
import React from 'react';
import { FaServer, FaCloud, FaCode, FaBrain } from 'react-icons/fa';

const services = [
  {
    icon: <FaServer size={30} className="text-yellow-400" />,
    title: 'Backend Development',
    description: 'Scalable and high-performance backend services using Python, Java, and RESTful APIs.'
  },
  {
    icon: <FaCloud size={30} className="text-yellow-400" />,
    title: 'Cloud Architecture',
    description: 'Building serverless systems and distributed pipelines on AWS and GCP.'
  },
  {
    icon: <FaCode size={30} className="text-yellow-400" />,
    title: 'Full Stack Solutions',
    description: 'Frontend to backend integration using React, Node.js, and modern web technologies.'
  },
  {
    icon: <FaBrain size={30} className="text-yellow-400" />,
    title: 'AI-Powered Tools',
    description: 'Leveraging LLMs and NLP to create intelligent and engaging user experiences.'
  },
];

const About = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-3">
          I’m Anmol Sansi, a Software Engineer based in Chicago, IL with 4+ years of experience in building backend systems,
          cloud-native infrastructure, and AI-powered tools. With a Master’s in Information Technology and a 4.0 GPA from
          Illinois Institute of Technology, I specialize in scalable backend design and intelligent systems.
        </p>
        <br></br>
        <br></br>
        <p className="text-lg">
          I love solving complex problems with elegant technical solutions. I enjoy collaborating on system design,
          building high-performance APIs, and experimenting with generative AI and modern cloud stacks.
        </p>
      </div>

      <div className=" mb-10">
        <h3 className="text-2xl font-semibold mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div>{service.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{service.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;