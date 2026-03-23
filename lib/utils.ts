import React from 'react';

export const SCROLL_THRESHOLD = 400;

export const scrollToElement = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  
  if (typeof window !== 'undefined') {
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      // W czystym Next.js z App Router zamiast history.pushState lepiej użyć router.push:
      // router.push(href, { scroll: false });
      window.history.pushState(null, '', href); 
    }
  }
};

export const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname);
  }
};