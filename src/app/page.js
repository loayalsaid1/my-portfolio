'use client';
import React from 'react';
import useSmoothScrollAndAnimation from '@/app/hooks/useSmoothScrollAndAnimation';
// import portfolioData from '@/app/data/portfolioData';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import FeaturedProjects from '@/app/components/FeaturedProjects';
import Experience from '@/app/components/Experience';
import MoreProjects from '@/app/components/MoreProjects';
import Skills from '@/app/components/Skills';
import Education from '@/app/components/Education';
import Contact from '@/app/components/Contact';
import ScrollToTopButton from '@/app/components/ScrollToTopButton';
import Footer from '@/app/components/Footer';

import {portfolioData } from '@/app/data/portfolioData';


export default function Home() {
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
