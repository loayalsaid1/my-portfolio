'use client';

import React, {useState} from 'react';


export default function Header({ navLinks }) {
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
