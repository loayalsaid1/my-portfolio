import React from 'react';


const ExperienceItem = ({ item }) => (
  <div className="relative pl-8 sm:pl-12 py-4 group">
    <div className="absolute left-0 sm:left-2 top-4 h-full w-0.5 bg-slate-700 group-hover:bg-accent transition-colors duration-300"></div>
    <div className="absolute left-[-6px] sm:left-0 top-4 w-4 h-4 bg-slate-600 rounded-full border-2 border-slate-900 group-hover:bg-accent transition-colors duration-300"></div>
    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
    <p className="text-sm text-slate-400 mb-2">{item.subtitle}</p>
    <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
      {item.points.map((point, i) => <li key={i}>{point}</li>)}
    </ul>
  </div>
);

export default ExperienceItem;
