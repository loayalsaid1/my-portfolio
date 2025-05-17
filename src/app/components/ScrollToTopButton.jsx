import React from 'react';

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

export default ScrollToTopButton;
