import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const FeaturedProjects = ({ projects }) => (
	<section id="featured-projects" className="py-20 md:py-32 bg-gradient-to-br-slate-900 fade-in-section">
		<div className="container mx-auto px-6">
			<SectionTitle title="Featured Projects" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map(project => <ProjectCard key={project.title} project={project} featured={true} cardBgClass="bg-gradient-to-br-slate-800" />)}
			</div>
		</div>
	</section>
);

export default FeaturedProjects;
