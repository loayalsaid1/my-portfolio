import React from 'react';

const SkillCategory = ({ skill }) => (
	<div className="bg-gradient-to-br-slate-900 p-6 rounded-xl shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300">
		<div className="flex items-center mb-4">
			{skill.icon}
			<h3 className="text-2xl font-semibold text-white">{skill.category}</h3>
		</div>
		<div className="flex flex-wrap gap-2">
			{skill.items.map(item => (
				<span key={item} className={`${skill.color} text-white px-3 py-1 text-sm rounded-full`}>{item}</span>
			))}
		</div>
	</div>
);


export default SkillCategory;
