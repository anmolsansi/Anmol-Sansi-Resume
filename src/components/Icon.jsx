import React from 'react';

const paths = {
  code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
  cloud: '<path d="M17.5 19H7a5 5 0 1 1 1.7-9.7A6 6 0 0 1 20 12a3.5 3.5 0 0 1-2.5 7Z"/>',
  database: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  chart: '<path d="M4 19h16M7 16v-4M12 16V7M17 16V4"/>',
  arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
  github: '<path d="M15 22v-4c.1-1-.4-2-1-2.5 3 0 6-1.5 6-6.5.1-1.6-.5-3-1.5-4 .2-1.2.2-2.4-.3-3.5 0 0-1.2-.4-4.2 1.5a14 14 0 0 0-7 0C4 1.1 2.8 1.5 2.8 1.5c-.5 1.1-.5 2.3-.3 3.5A5.7 5.7 0 0 0 1 9c0 5 3 6.5 6 6.5-.5.5-.9 1.2-1 2v4.5M6 19c-3 .9-3-1.5-4-2"/>',
};

export default function Icon({ name, size = 22 }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: paths[name] || paths.code }} />;
}
