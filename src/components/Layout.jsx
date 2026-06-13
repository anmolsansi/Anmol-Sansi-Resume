import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { profile } from '../data';
import Icon from './Icon';

const nav = [['Home', '/'], ['About', '/about'], ['Experience', '/experience'], ['Projects', '/projects'], ['Resume', '/resume'], ['Contact', '/contact']];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">AS</span><span><strong>{profile.name}</strong><small>{profile.title}</small></span></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span /><span /><span /></button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'}>
          {nav.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
          <Link className="button button-small" to="/contact" onClick={() => setOpen(false)}><Icon name="mail" size={17} /> Let's Connect</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="brand"><span className="brand-mark">AS</span><span><strong>{profile.name}</strong><small>{profile.title}</small></span></div>
        <nav>{nav.map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}</nav>
        <div className="socials"><a href={profile.github} aria-label="GitHub"><Icon name="github" /></a><a href={profile.linkedin} aria-label="LinkedIn" className="text-social">in</a><a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a></div>
        <p>© 2026 Anmol Sansi. Built with care and clean code.</p>
      </footer>
    </div>
  );
}
