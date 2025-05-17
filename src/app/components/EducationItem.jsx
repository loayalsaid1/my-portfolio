import React from 'react';


const EducationItem = ({ item }) => (
	<div className="bg-gradient-to-br-slate-800 p-6 rounded-lg shadow-lg">
		<h3 className="text-xl font-semibold text-white">{item.title}</h3>
		<p className="text-slate-400 text-sm mb-1">{item.institution}</p>
		{item.link && (
			<a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
				{item.linkText || "View More"} &rarr;
			</a>
		)}
	</div>
);

export default EducationItem;
