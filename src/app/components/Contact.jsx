import React from 'react';
import SectionTitle from './SectionTitle';


const Contact = ({ data }) => (
  <section id="contact" className="py-20 md:py-32 bg-gradient-to-br-slate-800 fade-in-section">
    <div className="container mx-auto px-6 text-center">
      <SectionTitle title="Let's Connect" />
      <p className="text-slate-400 max-w-xl mx-auto mb-10">{data.intro}</p>
      <a href={`mailto:${data.email}`} className="inline-block bg-accent text-slate-900 font-semibold px-10 py-4 rounded-lg shadow-md hover:bg-accent-darker hover:text-white transition-all duration-300 transform hover:scale-105 text-lg mb-12">
        Say Hello ({data.email})
      </a>
      <div className="flex justify-center space-x-6 mb-12">
        {data.socialLinks.map(social => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors duration-300" title={social.name}>
            {social.icon}
          </a>
        ))}
      </div>
      <a href={data.cvLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 border border-slate-600 px-6 py-3 rounded-lg hover:border-accent hover:text-accent transition-all duration-300">
        View Full CV
      </a>
    </div>
  </section>
);

export default Contact;
