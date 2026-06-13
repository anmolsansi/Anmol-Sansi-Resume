import React from 'react';
import BrandOrb from './BrandOrb';

export default function PageHero({ eyebrow, title, accent, description, children, variant }) {
  return <section className="page-hero container"><div className="hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title} {accent && <span>{accent}</span>}</h1><p>{description}</p>{children}</div><BrandOrb variant={variant} /></section>;
}
