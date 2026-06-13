import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function SectionTitle({ icon = 'star', title, link, linkText }) {
  return <div className="section-title"><h2><span><Icon name={icon} size={20} /></span>{title}</h2>{link && <Link to={link}>{linkText}<Icon name="arrow" size={17} /></Link>}</div>;
}
