'use client'
import { useState, useEffect } from 'react';

export default function CancerFacts() {
  const [isAnimated, setIsAnimated] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.querySelector('.section1');
      const section2 = document.querySelector('.section2');
      const section3 = document.querySelector('.section3');
      const section4 = document.querySelector('.section4');
      const section5 = document.querySelector('.section5');

      if (section1 && isElementInViewport(section1) && !isAnimated.section1) {
        setIsAnimated((prevState) => ({ ...prevState, section1: true }));
      }
      if (section2 && isElementInViewport(section2) && !isAnimated.section2) {
        setIsAnimated((prevState) => ({ ...prevState, section2: true }));
      }
      if (section3 && isElementInViewport(section3) && !isAnimated.section3) {
        setIsAnimated((prevState) => ({ ...prevState, section3: true }));
      }
      if (section4 && isElementInViewport(section4) && !isAnimated.section4) {
        setIsAnimated((prevState) => ({ ...prevState, section4: true }));
      }
      if (section5 && isElementInViewport(section5) && !isAnimated.section5) {
        setIsAnimated((prevState) => ({ ...prevState, section5: true }));
      }
    };

    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimated]);

  return (
    <section>
      <div className="container mx-auto mt-12 px-0 flex flex-wrap items-center justify-center" >
        <button className="container flex justify-center items-center button-red mb-8">Why Choose Project Connect:</button>
        <div className="w-full lg:w-11/12 xl:w-100 px-4">
          <div style={{ border: '3px solid red', borderRadius: '20px' }} className={`border border-black rounded-lg mb-8 p-4 ${isAnimated.section1 ? 'animate-rightLeft' : ''} section1`}>
                   <h2 className="text-2xl text-green-700 font-bold">• Tailored Matchmaking: Our advanced matching algorithm connects you with creators who possess the skills and experience necessary to fulfill your project requirements.</h2>
           
          </div>
          <div style={{ border: '3px solid red', borderRadius: '20px' }} className={`border border-black rounded-lg mb-8 p-4 ${isAnimated.section2 ? 'animate-slideLeft' : ''} section2`}>
          <h2 className="text-2xl text-green-700 font-bold">
• Transparent Communication: Enjoy are committed to delivering exceptional results that exceed your expectations.</h2>
            </div>
          
        </div>
      </div>
    </section>
  );
}
