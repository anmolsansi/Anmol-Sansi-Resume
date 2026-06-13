export const profile = {
  name: 'Anmol Sansi',
  title: 'Full Stack Software Engineer',
  tagline: 'Backend, Cloud & Applied AI Systems',
  location: 'San Francisco, CA',
  phone: '(312) 468-3428',
  email: 'asansi0896@gmail.com',
  relocation: 'Open to relocate',
  linkedin: 'https://www.linkedin.com/in/anmol-sansi',
  github: 'https://github.com/anmolsansi',
  website: 'https://anmolsansi.github.io/Anmol-Sansi-Resume/',
};

export const resumeSummary = 'Full Stack and AI Software Engineer with 5+ years of experience building and owning cloud-native, production-grade systems across fintech, analytics, and AI-driven products. Proven track record of delivering scalable APIs, real-time data pipelines, and LLM-powered applications that improve performance, reduce costs, and drive measurable business outcomes. Experienced in end-to-end ownership from system design and data modeling to deployment, observability, and incident response in high-availability environments.';

export const experiences = [
  {
    company: 'AI.Rawat', role: 'AI Full Stack Software Engineer II', dates: 'Aug 2024 - Present', location: 'San Francisco, USA', mark: 'AI',
    summary: 'Building analytics, AI workflows, and production-ready backend systems with end-to-end ownership.',
    bullets: [
      'Built a real-time sales analytics platform aggregating data from 5 e-commerce platforms into a unified dashboard, showing sales trends and inventory needs. Cut stock-out risks by 25% and improved inventory turnover by 15%.',
      'Developed AI-driven workflows in Moodle LMS, adding a RAG chatbot for admin-teacher-student collaboration and automated performance reporting. Improved academic outcomes by 20% and feedback quality by 30%.',
      'Owned the backend development lifecycle from requirements to deployment in a fast-paced environment, mentored 3 junior engineers, improved distributed-system reliability, and delivered production-ready APIs.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'RAG', 'AWS', 'PostgreSQL'],
  },
  {
    company: 'Alphadroid', role: 'Full Stack Software Engineer', dates: 'May 2025 - Nov 2025', location: 'Los Angeles, USA', mark: 'A',
    summary: 'Owned multilingual, voice-assisted products for patient registration and hotel operations.',
    bullets: [
      'Owned design and delivery of a multilingual, voice-assisted platform using React and Python to streamline patient registration and hotel operations, reducing intake time by 30%, increasing form completion rates by 40%, and enhancing accessibility for diverse users.',
      'Architected and deployed an AI hotel agent with React, Node.js, and OpenAI to handle daily guest interactions in natural language, supporting 5+ languages and accents. Improved page load times by 25%.',
      'Designed scalable, secure APIs using TypeScript, implemented PostgreSQL and MongoDB storage for structured real-time updates, and integrated OpenAI multi-function calling to automate complex backend workflows.',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'OpenAI'],
  },
  {
    company: 'S&P Global', role: 'Software Engineer', dates: 'Jul 2019 - Dec 2022', location: 'New Delhi, India', mark: 'S&P',
    summary: 'Engineered cloud data platforms and backend systems for high-volume financial markets.',
    bullets: [
      'Migrated the Financial Data (Pricing) platform to the cloud in a 20+ engineer team, participated in on-call rotations, and resolved production incidents to maintain 99.9% uptime.',
      'Accelerated development and debugging using Java, test-driven development, and unit testing, resulting in a 50% performance boost.',
      'Designed and maintained Python and Java backend systems and 100+ RESTful APIs managing 10M+ financial records. Improved data integrity, boosted revenue, and reduced maintenance costs by 40%.',
      'Engineered ETL pipelines using Python, AWS Lambda, and Kinesis to process 1M+ financial records daily. Reduced cost by 15%, integrated SQS for asynchronous event processing, and contributed across the full SDLC.',
    ],
    tech: ['Java', 'Python', 'AWS Lambda', 'Kinesis', 'SQS', 'SQL', 'Microservices'],
  },
];

export const education = [
  { school: 'Illinois Institute of Technology', degree: "Master's in Information Technology and Management", year: '2024' },
  { school: 'Delhi Technological University', degree: 'Bachelor of Technology, Engineering', year: '2019' },
];

export const projects = [
  { name: 'ResolveOps AI', repo: 'ResolveOps-AI', category: 'AI / ML', icon: 'RO', description: 'Support intelligence platform with ticket ingestion, cited RAG answers, quality scoring, reliability metrics, connectors, and SLA-risk workflows.', tech: ['Python', 'FastAPI', 'React', 'RAG', 'PostgreSQL'] },
  { name: 'CheckIn Care Voice Agent', repo: 'Voice-Agent', category: 'AI / ML', icon: 'VA', description: 'Voice-assisted patient intake and staff workflow with resumable sessions, PostgreSQL persistence, protected staff tools, and PDF summaries.', tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Voice AI'] },
  { name: 'OrderlyApp', repo: 'OrderlyApp', category: 'Full Stack', icon: 'OR', description: 'Voice-first food ordering application with restaurant browsing, configurable carts, mock checkout, order tracking, and resilient backend persistence.', tech: ['TypeScript', 'Next.js', 'FastAPI', 'PostgreSQL', 'Redis'] },
  { name: 'OpenClaw Mission Control', repo: 'OpenClaw-Mission-Control', category: 'Analytics', icon: 'OM', description: 'Real-time control center for AI-agent instances with system monitoring, agent status, cost analytics, cron management, memory search, and operational tools.', tech: ['Next.js', 'React', 'Tailwind', 'SQLite'] },
  { name: 'Neutron Mission Control', repo: 'Neutron-Mission-Control', category: 'Full Stack', icon: 'NM', description: 'Local operator dashboard with Kanban workflows, project summaries, notes, memory, agents, activity history, and file-backed APIs.', tech: ['TypeScript', 'Next.js', 'JSON APIs', 'Dashboard'] },
  { name: 'FHIR Ingestion Platform', repo: 'fhir-ingestion-platform', category: 'Cloud & Data', icon: 'FI', description: 'Reliable healthcare ingestion pipeline that validates FHIR data, stores normalized and raw records, tracks runs, and replays failed items.', tech: ['Python', 'FastAPI', 'FHIR', 'PostgreSQL', 'Docker'] },
  { name: 'LocalForge Coach', repo: 'LocalForge-Coach', category: 'AI / ML', icon: 'LC', description: 'Local-first interview answer coach using a multi-step Ollama pipeline to analyze questions, job descriptions, resumes, answers, and evidence.', tech: ['Python', 'FastAPI', 'Ollama', 'LLM Pipeline'] },
  { name: 'PDFolio Engine', repo: 'PDFolio-Engine', category: 'Cloud & Data', icon: 'PE', description: 'Privacy-first HTML-to-PDF and document retrieval pipeline using Chromium rendering and a fast local SQLite FTS5 search index.', tech: ['Python', 'Playwright', 'SQLite', 'FastAPI'] },
  { name: 'AI Resume Agent', repo: 'AI-Resume-Agent', category: 'AI / ML', icon: 'AR', description: 'Resume tailoring system that analyzes job descriptions, selects relevant projects, rewrites truthfully, evaluates output, and generates DOCX files.', tech: ['Python', 'FastAPI', 'Ollama', 'OpenRouter', 'DOCX'] },
  { name: 'Voice Task Bot', repo: 'Voice-Task-Bot', category: 'Automation', icon: 'VT', description: 'Voice-driven task manager with natural-language date parsing, deduplication, exact scheduling, Telegram reminders, and optional local LLM support.', tech: ['Python', 'FastAPI', 'Telegram', 'APScheduler', 'Docker'] },
  { name: 'Financial Analysis API', repo: 'Financial-Analysis', category: 'Cloud & Data', icon: 'FA', description: 'Milestone-driven financial backend for external market data, persistence, CRUD workflows, validation, analytics, and documented APIs.', tech: ['Python', 'FastAPI', 'CI', 'Analytics'] },
  { name: 'Multi-Agent Financial Research', repo: 'multi-agent-fin-research', category: 'AI / ML', icon: 'MR', description: 'Multi-agent research project for coordinating financial analysis tasks and producing structured research outputs.', tech: ['Python', 'AI Agents', 'Financial Research'] },
  { name: 'The Movie Review App', repo: 'The-Movie-Review-App', category: 'Full Stack', icon: 'MR', description: 'Android movie discovery and review application built around external movie data and a native mobile experience.', tech: ['Java', 'Android', 'Movie APIs'] },
];

export const skillGroups = [
  ['Languages', 'Python', 'Java', 'TypeScript', 'JavaScript'],
  ['Frontend', 'React', 'Redux'],
  ['Backend', 'Node.js', 'FastAPI', 'Django', 'Flask', 'Spring Boot', 'REST APIs'],
  ['Data', 'SQL', 'MySQL', 'PostgreSQL', 'NoSQL', 'MongoDB'],
  ['Cloud / DevOps', 'AWS', 'Docker', 'Kubernetes', 'Microservices'],
  ['AI', 'OpenAI', 'RAG', 'AI Workflows'],
];
