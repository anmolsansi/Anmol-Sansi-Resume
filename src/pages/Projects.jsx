import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { ProjectCard } from './Home';
import { projects } from '../data';

const filters = ['All Projects', 'AI / ML', 'Full Stack', 'Cloud', 'Automation', 'Analytics'];
export default function Projects() {
  const [filter, setFilter] = useState(filters[0]);
  const visible = filter === filters[0] ? projects : projects.filter(p => p.category === filter);
  return <><PageHero eyebrow="Portfolio" title="Projects" variant="code" description="A selection of AI-powered products, full-stack systems, and cloud solutions built to solve real-world problems."/><section className="container panel-section"><div className="filter-row">{filters.map(f => <button className={f === filter ? 'active' : ''} onClick={() => setFilter(f)} key={f}>{f}</button>)}</div><div className="project-grid">{visible.map(p => <ProjectCard project={p} key={p.repo}/>)}</div></section></>;
}
