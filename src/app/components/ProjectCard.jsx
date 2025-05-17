import React from 'react';


const ProjectCard = ({ project, featured }) => (
	<div className={`bg-gradient-to-br-slate-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col project-card-content`}>
		<div className="project-image-container aspect-[16/10] bg-slate-700 rounded-t-xl overflow-hidden">
			<img 
				src={project.imageUrl} 
				alt={`${project.title} Project Screenshot`} 
				className='w-full h-full object-fill object-center'
				onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1E293B/94A3B8?text=Image+Not+Found'; }}
			/>
		</div>
		<div className="p-6 flex-grow">
			<h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
			<p className="text-slate-400 text-sm mb-3">{project.description}</p>
			<p className="text-xs text-slate-500 mb-4">Tech: {project.tech}</p>
		</div>
		<div className="p-6 bg-slate-700/50 rounded-b-xl">
			<a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
				{featured ? "View Project" : "View Demo"} &rarr;
			</a>
		</div>
	</div>
);

export default ProjectCard;
