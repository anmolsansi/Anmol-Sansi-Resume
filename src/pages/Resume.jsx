import React from 'react';
import Icon from '../components/Icon';
import { education, experiences, profile, resumeSummary, skillGroups } from '../data';

export default function Resume() {
  return (
    <>
      <section className="container resume-heading">
        <div>
          <span className="eyebrow">Latest Resume</span>
          <h1>{profile.name}</h1>
          <h2>{profile.title} <span>| {profile.tagline}</span></h2>
          <div className="resume-contact">
            <span><Icon name="pin" size={16}/>{profile.location}</span>
            <span><Icon name="user" size={16}/>{profile.phone}</span>
            <span>{profile.relocation}</span>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.website}>Website</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
        <a className="button" href={process.env.PUBLIC_URL + '/Anmol_Sansi_CV.pdf'} download>
          Download PDF <Icon name="download"/>
        </a>
      </section>

      <section className="container resume-document">
        <ResumeSection title="Summary" icon="user">
          <p className="resume-summary">{resumeSummary}</p>
        </ResumeSection>

        <ResumeSection title="Skills" icon="code">
          <div className="resume-skill-list">
            {skillGroups.map(([name, ...items]) => (
              <div className="resume-skill" key={name}>
                <strong>{name}</strong>
                <p>{items.join(', ')}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Work Experience" icon="briefcase">
          <div className="resume-work-list">
            {experiences.map(job => (
              <article className="resume-full-job" key={job.company}>
                <header>
                  <div>
                    <h3>{job.role} - {job.company}</h3>
                    <span>{job.location}</span>
                  </div>
                  <strong>{job.dates}</strong>
                </header>
                <ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
              </article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education" icon="star">
          <div className="resume-education-list">
            {education.map(item => (
              <article key={item.school}>
                <div><h3>{item.school}</h3><p>{item.degree}</p></div>
                <strong>{item.year}</strong>
              </article>
            ))}
          </div>
        </ResumeSection>
      </section>
    </>
  );
}

function ResumeSection({ title, icon, children }) {
  return <article className="resume-section"><h2><Icon name={icon}/>{title}</h2>{children}</article>;
}
