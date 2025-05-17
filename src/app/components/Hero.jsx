import React from 'react';

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


export default Hero;
