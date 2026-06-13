import React from 'react';
import Icon from './Icon';
import profileImage from '../assets/profile.jpeg';

export default function BrandOrb({ variant = 'initials' }) {
  return (
    <div className="orb-wrap" aria-hidden="true">
      <span className="orbit orbit-one" />
      <span className="orbit orbit-two" />
      <span className="orbit-dot dot-one" />
      <span className="orbit-dot dot-two" />
      <span className="orbit-dot dot-three" />
      <div className={variant === 'code' ? 'orb-main' : 'orb-main orb-photo'}>
        {variant === 'code' ? <Icon name="code" size={64} /> : <img src={profileImage} alt="" />}
      </div>
      <div className="float-icon float-code"><Icon name="code" /></div>
      <div className="float-icon float-cloud"><Icon name="cloud" /></div>
      <div className="float-icon float-data"><Icon name="database" /></div>
      <div className="float-icon float-chart"><Icon name="chart" /></div>
    </div>
  );
}
