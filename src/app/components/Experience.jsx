import React from 'react';
import ExperienceItem from './ExperienceItem';
import SectionTitle from './SectionTitle';

const Experience = ({ items }) => (
  <section id="experience" className="py-20 md:py-32 fade-in-section bg-gradient-to-br-slate-800">
    <div className="container mx-auto px-6">
      <SectionTitle title="Journey & Milestones" />
      <div className="max-w-3xl mx-auto space-y-10">
        {items.map(item => <ExperienceItem key={item.title} item={item} />)}
      </div>
    </div>
  </section>
);


export default Experience;
