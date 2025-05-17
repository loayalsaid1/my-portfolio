import React from 'react';
import SkillCategory from './SkillCategory';
import SectionTitle from './SectionTitle';


const Skills = ({ skills }) => (
	<section id="skills" className="py-20 md:py-32 fade-in-section bg-gradient-to-br-slate-800">
		<div className="container mx-auto px-6">
			<SectionTitle title="My Arsenal of Skills" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skills.map(skill => <SkillCategory key={skill.category} skill={skill} />)}
			</div>
		</div>
	</section>
);


export default Skills;
