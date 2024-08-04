import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const content = contentRef.current;

    gsap.to(heading, {
      x: 200,
      duration: 3,
      scrollTrigger: {
        trigger: heading,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub:1,
      }
    });

    gsap.to(content, {
      x: -60,
      duration: 3,
      scrollTrigger: {
        trigger: content,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub:1,
      }
    });
  }, []);

  const headingStyle = {
    backgroundImage: 'linear-gradient(#7b4397, #dc2430)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <div className="flex" >
      <h1 className="relative left-[30%] -top-10 text-5xl font-bold text-white" id ="about" ref={headingRef}>
        About
      </h1>
      <div className="left w-1/2">
        <img src="./public/images/rp1.jpg" className="w-[65%] h-[70%] rounded-xl relative top-20 left-10 hover:rotate-12 transition duration-300 ease-in-out -mt-5" alt="Profile"></img>
      </div>
      <div className="right w-1/2 relative top-20 right-10" ref={contentRef}>
        <h1 style={headingStyle} className="text-4xl font-bold">I'm Mahesh</h1>
        <h4 className="text-blue-600 font-semibold">Software Developer</h4>
        <p className='text-white'>Passionate and dedicated Full Stack Web Developer with a keen interest in application development and a drive to expand knowledge in the realm of AI/ML. Proficient in Python and web development technologies like JavaScript and MongoDB, with a strong foundation in principles. Committed to creating efficient, reliable applications and contributing effectively to software development projects. Known for strong teamwork and leadership skills, eager to make a significant impact in the field.</p>
        <a href="#" className="bg-blue-500 text-white py-2 px-3 rounded relative top-5 hover:bg-red-700">Contact Me</a>
      </div>
    </div>
  );
}

export default About;
