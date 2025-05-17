import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const MoreProjects = ({ projects }) => (
	<section id="more-projects" className="py-20 md:py-32 bg-gradient-to-br-slate-900 fade-in-section">
		<div className="container mx-auto px-6">
			<SectionTitle title="More Projects & Demos" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map(project => <ProjectCard key={project.title} project={project} featured={false} />)}
			</div>
		</div>
	</section>
);

export default MoreProjects;
