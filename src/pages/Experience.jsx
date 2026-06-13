import React from 'react';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import { experiences } from '../data';

export default function Experience() {
  return <>
    <PageHero eyebrow="Professional Journey" title="Experience" description="A track record of building scalable software, cloud systems, and AI-powered products that deliver real business impact." />
    <section className="container experience-layout"><div className="timeline">{experiences.map(job => <article className="experience-card" key={job.company}><div className="company-mark">{job.mark}</div><div className="experience-content"><header><div><h2>{job.company}</h2><strong>{job.role}</strong></div><div><span>{job.dates}</span><small><Icon name="pin" size={14}/>{job.location}</small></div></header><p>{job.summary}</p><ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul><div className="tags"><b>Tech Stack:</b>{job.tech.map(t => <span key={t}>{t}</span>)}</div></div></article>)}</div><aside className="experience-aside"><div className="info-card"><h2>Experience at a glance</h2>{[['4+ Years','Professional experience','briefcase'],['3','Product companies','user'],['100+','APIs delivered','code'],['10M+','Records managed','database']].map(([n,l,i]) => <div className="aside-stat" key={l}><Icon name={i}/><p><strong>{n}</strong>{l}</p></div>)}</div><div className="info-card"><h2>Key Impact</h2><div className="impact-grid"><span><strong>99.9%</strong>Uptime</span><span><strong>1M+</strong>Daily records</span><span><strong>25%</strong>Risk reduction</span><span><strong>40%</strong>Completion gain</span></div></div></aside></section>
  </>;
}
