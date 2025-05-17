import React from 'react';


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

export default Footer;
