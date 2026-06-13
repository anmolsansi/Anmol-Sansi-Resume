import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import { skillGroups } from '../data';

const values = [['Problem Solver', 'I turn complex systems into practical, dependable solutions.'], ['Clean & Scalable Code', 'I build maintainable foundations that grow with the product.'], ['Ownership', 'I carry work from architecture through production and observability.'], ['User Impact', 'I prioritize outcomes that people and businesses can measure.'], ['Continuous Learner', 'I stay curious across engineering, cloud, and applied AI.'], ['Collaboration', 'I communicate clearly and raise the quality of the team around me.']];

export default function About() {
  return <>
    <PageHero eyebrow="About Me" title="About" accent="Me" description="I build scalable backend systems, cloud-native applications, and AI-powered products that solve real-world problems."><div className="button-row"><Link className="button" to="/contact">Let's Connect <Icon name="arrow"/></Link><a className="button button-outline" href={process.env.PUBLIC_URL + '/Anmol_Sansi_CV.pdf'} download><Icon name="download"/> Download Resume</a></div></PageHero>
    <section className="container two-column"><article className="info-card"><h2><Icon name="user"/> My Summary</h2><p>I enjoy turning complex ideas into simple, reliable software. My work spans backend development, distributed systems, cloud infrastructure, and applied AI, combining engineering depth with a product mindset.</p><p>I thrive in collaborative environments and take pride in shipping useful solutions with measurable business value.</p><div className="mini-stats"><span><strong>4+</strong>Years</span><span><strong>100+</strong>APIs built</span><span><strong>10M+</strong>Records</span><span><strong>99.9%</strong>Uptime</span></div></article><article className="info-card"><h2><Icon name="star"/> Strengths & Values</h2><div className="values-grid">{values.map(([title, text]) => <div key={title}><span className="round-icon"><Icon name="star" size={17}/></span><p><strong>{title}</strong>{text}</p></div>)}</div></article></section>
    <section className="container info-card skills-card"><h2>What I Work With</h2><div className="skill-columns">{skillGroups.map(([name, ...items]) => <div key={name}><h3>{name}</h3><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>
    <section className="container info-card journey"><h2>My Journey</h2><div className="journey-line">{[['2019','Financial platforms','S&P Global'],['2023','Cloud & graduate study','Illinois Tech'],['2024','Applied AI products','AI.Rawat'],['2025','Voice experiences','Alphadroid'],['Now','Building what is next','Open to impact']].map(([year,title,sub]) => <div key={year}><span><Icon name="code"/></span><strong>{title}</strong><small>{year} • {sub}</small></div>)}</div></section>
  </>;
}
