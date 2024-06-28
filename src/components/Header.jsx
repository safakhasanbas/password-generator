import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const Header = () => {
  const spans = useRef([]);

  /* Reveal Animation */
  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.from(spans.current, {
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: 0.1,
      });
    }, 100); 

    return () => clearTimeout(timeout); 

  }, []);

  return (
    <div className='w-full uppercase h-[6.5em] flex flex-col justify-center items-center pt-4'>
      {/* First Word */}
      <div className='lg:text-4xl space-x-2 md:text-5xl sm:text-4xl xs:text-xl text-5xl pt-4'>
        <span ref={el => (spans.current[0] = el)} className='oleo-script-regular'>p</span>
        <span ref={el => (spans.current[1] = el)} className='roboto-regular'>a</span>
        <span ref={el => (spans.current[2] = el)} className='spicy-rice-regular'>s</span>
        <span ref={el => (spans.current[3] = el)} className='graduate-regular'>s</span>
        <span ref={el => (spans.current[4] = el)} className='bruno-ace-regular'>w</span>
        <span ref={el => (spans.current[5] = el)} className='sigmar-regular'>o</span>
        <span ref={el => (spans.current[6] = el)} className='castoro-titling-regular'>r</span>
        <span ref={el => (spans.current[7] = el)} className='lakki-reddy-regular'>d</span>
      </div>
      
       {/* Second Word */}
      <div className='lg:text-4xl space-x-2 md:text-5xl sm:text-4xl xs:text-xl text-5xl '>
        <span ref={el => (spans.current[8] = el)} className='kablammo-kab'>g</span>
        <span ref={el => (spans.current[9] = el)} className='rubik-iso-regular'>e</span>
        <span ref={el => (spans.current[10] = el)} className='oleo-script-regular'>n</span>
        <span ref={el => (spans.current[11] = el)} className='sigmar-regular'>e</span>
        <span ref={el => (spans.current[12] = el)} className='architects-daughter-regular'>r</span>
        <span ref={el => (spans.current[13] = el)} className='graduate-regular'>a</span>
        <span ref={el => (spans.current[14] = el)} className='staatliches-regular'>t</span>
        <span ref={el => (spans.current[15] = el)} className='ranchers-regular'>o</span>
        <span ref={el => (spans.current[16] = el)} className='sigmar-regular'>r</span>
      </div>
    </div>
  );
}

export default Header