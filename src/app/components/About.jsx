import React from 'react';
import SectionTitle from './SectionTitle';

const About = ({ data }) => (
  <section id="about" className="py-20 md:py-32 bg-gradient-to-br-slate-800 fade-in-section">
    <div className="container mx-auto px-6">
      <SectionTitle title="About Me" />
      <div className="max-w-4xl mx-auto text-slate-300 text-lg leading-relaxed space-y-6">
        {data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <h3 className="text-2xl font-semibold text-accent pt-4">{data.whatMakesMeTick.title}</h3>
        <ul className="list-disc list-inside space-y-3 pl-4">
          {data.whatMakesMeTick.points.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
        <p>{data.conclusion}</p>
      </div>
    </div>
  </section>
);

export default About;
