import React from 'react';
import { Link } from 'react-router-dom';
import BrandOrb from '../components/BrandOrb';
import Icon from '../components/Icon';
import SectionTitle from '../components/SectionTitle';
import { experiences, projects } from '../data';

const stats = [['99.9%', 'System uptime achieved', 'star'], ['1M+', 'Records processed daily', 'database'], ['25%', 'Stock-out reduction', 'chart'], ['40%', 'Improvement in completion', 'user']];
const stack = ['Python', 'TypeScript', 'Java', 'React', 'FastAPI', 'AWS', 'PostgreSQL'];

export default function Home() {
  return <>
    <section className="home-hero container">
      <div className="hero-copy"><span className="eyebrow">Backend • Cloud • Applied AI</span><h1>Building scalable software, cloud systems, and <span>AI-powered</span> products.</h1><p>Full Stack Software Engineer with 4+ years of experience delivering reliable backend systems, cloud infrastructure, and AI applications that create measurable impact.</p><div className="button-row"><Link className="button" to="/projects">View Projects <Icon name="arrow" /></Link><Link className="button button-outline" to="/contact"><Icon name="mail" /> Contact Me</Link></div><div className="tech-strip">{stack.map(item => <span key={item}>{item}</span>)}</div></div>
      <BrandOrb />
    </section>
    <section className="container stats-grid">{stats.map(([number, label, icon]) => <div className="stat" key={label}><Icon name={icon} size={32}/><strong>{number}</strong><span>{label}</span></div>)}</section>
    <section className="container panel-section"><SectionTitle title="Featured Projects" icon="code" link="/projects" linkText="View all projects"/><div className="project-grid featured">{projects.slice(0, 3).map(p => <ProjectCard key={p.repo} project={p} />)}</div></section>
    <section className="container panel-section"><SectionTitle title="Experience Snapshot" icon="briefcase" link="/experience" linkText="View full experience"/><div className="snapshot-grid">{experiences.map(job => <article key={job.company}><div className="company-mark">{job.mark}</div><div><h3>{job.company}</h3><strong>{job.role}</strong><small>{job.dates}</small><p>{job.summary}</p></div></article>)}</div></section>
    <section className="container cta"><div className="cta-icon"><Icon name="arrow" size={28}/></div><div><h2>Let's build something impactful together.</h2><p>Open to product-minded teams, ambitious systems, and meaningful collaborations.</p></div><Link className="button" to="/contact">Get In Touch <Icon name="arrow" /></Link></section>
  </>;
}

export function ProjectCard({ project }) {
  return <article className="project-card"><div className="project-visual"><span>{project.icon}</span><small>{project.category}</small></div><div className="project-body"><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div><a href={`https://github.com/anmolsansi/${project.repo}`} target="_blank" rel="noreferrer">View on GitHub <Icon name="arrow" size={16}/></a></div></article>;
}
