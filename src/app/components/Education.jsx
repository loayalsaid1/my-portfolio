import React from 'react';
import SectionTitle from './SectionTitle';
import EducationItem from './EducationItem';


const Education = ({ items }) => (
  <section id="education" className="py-20 md:py-32 fade-in-section bg-gradient-to-br-slate-900">
    <div className="container mx-auto px-6">
      <SectionTitle title="Foundations of Knowledge" />
      <div className="max-w-3xl mx-auto space-y-8">
        {items.map(item => <EducationItem key={item.title} item={item} />)}
      </div>
    </div>
  </section>
);

export default Education;
