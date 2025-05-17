import { useEffect } from 'react';

export default function useSmoothScrollAndAnimation () {
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
