import React, { useState, useEffect, useRef } from 'react';
import {portfolioData} from './app/data/portfolioData';


// Smooth Scroll and Animation Hook
const useSmoothScrollAndAnimation = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const headerOffset = header ? header.offsetHeight : 0;

    const handleScroll = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };
    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', handleScroll);
    });

    const sections = document.querySelectorAll('.fade-in-section');
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Scroll to Top Button Logic
    const scrollTopButton = document.getElementById('scrollTopButton');
    const handleScrollButtonVisibility = () => {
      if (scrollTopButton) {
        if (window.pageYOffset > 300) {
          scrollTopButton.classList.remove('opacity-0', 'invisible');
          scrollTopButton.classList.add('opacity-100', 'visible');
        } else {
          scrollTopButton.classList.remove('opacity-100', 'visible');
          scrollTopButton.classList.add('opacity-0', 'invisible');
        }
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScrollButtonVisibility);
    if (scrollTopButton) {
        scrollTopButton.addEventListener('click', scrollToTop);
    }


    return () => {
      navLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
      sections.forEach(section => {
        if (section && observer) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScrollButtonVisibility);
      if (scrollTopButton) {
        scrollTopButton.removeEventListener('click', scrollToTop);
      }
    };
  }, []);
};


// Components
const SectionTitle = ({ title }) => (
  <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-12 md:mb-16 text-center">{title}</h2>
);

const Header = ({ navLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); 
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-white/5">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Loay Al-Said</a>
        <div className="space-x-4 hidden md:flex">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-slate-300 hover:text-accent transition-colors duration-300 px-2 py-1 rounded-md" onClick={handleNavLinkClick}>{link.label}</a>
          ))}
        </div>
        <button id="mobile-menu-button" className="md:hidden text-slate-300 focus:outline-none" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu with Transition */}
      <div 
        id="mobile-menu" 
        className={`overflow-hidden md:hidden bg-gradient-to-br-slate-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {navLinks.map(link => (
          <a 
            key={link.href} 
            href={link.href} 
            className="block py-3 px-6 text-slate-300 hover:text-accent hover:bg-slate-700 transition-colors duration-200" 
            onClick={handleNavLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

const Hero = ({ data, profileImage }) => (
  <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('${data.backgroundImage}')` }}>
    <div className="container mx-auto px-6 text-center">
      <img src={profileImage} alt="Loay Al-Said" className="w-48 h-48 md:w-60 md:h-60 mx-auto rounded-full object-cover shadow-2xl border-4 border-cyan-400 mb-8"
           onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/3B82F6/FFFFFF?text=Loay'; }} />
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        Hi, I'm <span className="text-accent">{data.name}</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 mb-6 font-medium">{data.title}</p>
      <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10">{data.subtitle}</p>
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mb-4">
        <a href="#featured-projects" className="w-full sm:w-auto bg-accent text-slate-900 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-accent-darker hover:text-white transition-all duration-300 transform hover:scale-105">
          View My Work
        </a>
        <a href="#contact" className="w-full sm:w-auto bg-slate-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-slate-600 transition-all duration-300 transform hover:scale-105">
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

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

const Experience = ({ items }) => (
  <section id="experience" className="py-20 md:py-32 fade-in-section bg-gradient-to-br-slate-800">
    <div className="container mx-auto px-6">
      <SectionTitle title="Journey & Milestones" />
      <div className="max-w-3xl mx-auto space-y-10">
        {items.map(item => <ExperienceItem key={item.title} item={item} />)}
      </div>
    </div>
  </section>
);

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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-br-slate-900 py-10 text-center">
      <p className="text-slate-400 text-sm">
        &copy; {currentYear} Loay Al-Said. Crafted with
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 inline-block text-red-500 -mt-1 mx-1">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383-.218c-.017.01-.033.018-.05.026l-.007.003-.022.012a6.042 6.042 0 0 1-.143.049c-.101.033-.208.058-.318.081a6.04 6.04 0 0 1-.468.115c-.16.033-.325.054-.492.068a4.593 4.593 0 0 1-.54.041c-.31.022-.623.03-.938.03-.314 0-.627-.008-.938-.03a4.59 4.59 0 0 1-.54-.04c-.166-.015-.33-.036-.491-.07a6.043 6.043 0 0 1-.468-.114c-.11-.024-.217-.049-.318-.082a6.044 6.044 0 0 1-.143-.05l-.022-.011Z" />
        </svg>
        and <span className="text-accent">Code</span>.
      </p>
      <p className="text-xs text-slate-500 mt-2">Inspired by modern design and a passion for building.</p>
    </footer>
  );
};

const ScrollToTopButton = () => (
    <button
        id="scrollTopButton"
        className="fixed bottom-8 right-8 bg-accent text-slate-900 p-3 rounded-full shadow-lg hover:bg-accent-darker hover:text-white transition-all duration-300 opacity-0 invisible z-50"
        title="Scroll to top"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
    </button>
);


// Main App Component
function App() {
  useSmoothScrollAndAnimation(); 

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#featured-projects", label: "Featured Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#more-projects", label: "More Projects" },
    { href: "#skills", label: "Skills" }, 
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      
      
      <Header navLinks={navLinks} />
      <main className="bg-gradient-to-br-slate-900">
        <Hero data={portfolioData.hero} profileImage={portfolioData.profileImage} />
        <About data={portfolioData.about} />
        <FeaturedProjects projects={portfolioData.featuredProjects} />
        <Experience items={portfolioData.experience} />
        <MoreProjects projects={portfolioData.moreProjects} />
        <Skills skills={portfolioData.skills} />
        <Education items={portfolioData.education} />
        <Contact data={portfolioData.contact} />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
