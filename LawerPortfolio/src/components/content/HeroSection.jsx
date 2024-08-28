import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import bg from "../../assets/bg1.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-title',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.hero-title', start: 'top 80%' } }
    );
    
    gsap.fromTo(
      '.hero-text',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.hero-text', start: 'top 80%' } }
    );
  }, []);

  return (
    <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative flex items-center justify-end h-full text-left text-white px-4 md:px-8'>
        <div className='max-w-lg p-6 bg-opacity-80 rounded-lg shadow-lg'>
          <h1 className='hero-title text-4xl font-bold mb-8 text-yellow-500'>
            Your Trusted Partner in Legal Excellence
          </h1>
          <p className='hero-text text-lg md:text-xl'>
            EXPERT LEGAL SOLUTIONS TAILORED TO YOUR NEEDS, DELIVERED WITH INTEGRITY, PROFESSIONALISM, AND DEDICATION TO EXCELLENCE.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
