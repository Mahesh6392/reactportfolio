import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skill() {
  const one = useRef(null);

  useEffect(() => {
    const o = one.current;
    gsap.to(o, {
      y: -200,
      duration: 10,
      scrollTrigger: {
        trigger: o,
        start: 'top 40%',
        end: 'bottom 20%',
        scrub: 1,
        markers: 0, // Disable markers for cleaner UI
      },
    });
  }, []);

  const skills = [
    { imgSrc: './public/images/rht.png', name: 'HTML', width: '90%' },
    { imgSrc: './public/images/rcss.png', name: 'CSS', width: '90%' },
    { imgSrc: './public/images/rjs.png', name: 'Java Script', width: '80%' },
    { imgSrc: './public/images/rtw.png', name: 'Tailwind', width: '90%' },
    { imgSrc: './public/images/rj.png', name: 'Java', width: '70%' },
    { imgSrc: './public/images/rr.png', name: 'React', width: '80%' },
    { imgSrc: './public/images/rr.png', name: 'React Native', width: '60%' },
    { imgSrc: './public/images/rca.png', name: 'Canva', width: '90%' },
    { imgSrc: './public/images/rp.png', name: 'Python', width: '80%' },
    { imgSrc: './public/images/rc.png', name: 'C', width: '75%' },
    { imgSrc: './public/images/rn.png', name: 'Node.js', width: '70%' },
    { imgSrc: './public/images/rm.png', name: 'MongoDB', width: '80%' },
  ];

  return (
    <div className='h-[40%] w-full' id="skills">
      <h1 className='text-white text-5xl font-bold flex justify-center -mt-[10%]'>Skills & Tools</h1>
      <div className='skill flex flex-wrap justify-center w-[80%] relative mx-auto' ref={one}>
        {skills.map((skill, index) => (
          <div key={index} className="skill1 relative mt-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img src={skill.imgSrc} className="w-[40%] mx-auto" alt={skill.name} />
            <span className="text-white absolute bottom-2 left-1/2 transform -translate-x-1/2 font-bold text-xl">{skill.name}</span>
            <div className="outer border bg-white w-[60%] rounded-md h-3 overflow-hidden mt-2 mx-auto">
              <div className="inner bg-green-500 h-full" style={{ width: skill.width }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
