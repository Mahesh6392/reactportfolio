import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import 'remixicon/fonts/remixicon.css';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ParticlesBackground from './ParticlesBackground';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heading = useRef(null);
  const icons = useRef(null);

  useEffect(() => {
    const head = heading.current;
    const ic = icons.current;
    gsap.to(head, {
      x: 20,
      duration: 4,
      scrollTrigger: {
        trigger: head,
        start: 'top 80%',
        bottom: 'bottom 20%',
        toggleActions: 'restart none none',
      },
    });
    gsap.to(ic, {
      x: 20,
      duration: 4,
      scrollTrigger: {
        trigger: ic,
        start: 'top 80%',
        bottom: 'bottom 20%',
      },
    });
  }, []);

  const [text] = useTypewriter({
    words: ['Web Developer', 'UI/UX Developer', 'Java Developer', 'React JS Developer', 'Video Editor'],
    loop: {},
    typeSpeed: 100,
    deletespeed: 40,
  });

  const gradientStyle = {
    backgroundImage: 'linear-gradient(#7b4397, #dc2430)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const data1 = [
    { anchor: '', classv: 'ri-linkedin-fill' },
    { anchor: '', classv: 'ri-github-fill' },
    { anchor: '', classv: 'ri-twitter-x-fill' },
    { anchor: '', classv: 'ri-instagram-line' },
  ];

  return (
    <>
      <div className="main flex flex-col md:flex-row h-screen" id="home">
        <div className="text-5xl leftsection w-full md:w-1/2 relative top-[10%] md:top-[20%]" ref={heading}>
          <div className="font-bold flex justify-center relative right-[3%]">
            <h1 style={gradientStyle}>
              Hi, I'm, <br />
              <h1 className="mt-5"> Mahesh Kumar</h1>
            </h1>
          </div>
          <span className="text-white text-3xl font-semibold relative left-[23%]">{text}</span>
          <span className="text-red-500 relative left-[23%]">
            <Cursor />
          </span>
          <div className="flex flex-col md:flex-row space-x-5">
            <div className="flex gap-5 relative left-0 md:left-[20%] ">
              <a href="https://drive.google.com/file/d/15CzqrdiNpauh4PBfz3m4CMmml1mSDUJt/view?usp=drivesdk" target='_blank' className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5 text-sm">
                Resume
              </a>
              <a href="https://github.com/Mahesh6392" target='_blank' className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5 text-sm">
                Github
              </a>
            </div>
          </div>
        </div>
        <div
  className="flex absolute gap-7 left-[12%] font-bold text-xl top-[70%] sm:top-[80%] md:top-[70%]" 
  ref={icons}
>
  {data1.map((value, index) => (
    <a href="#" key={index} className="hover:bg-blue-400 hover:rounded-full bg-red-600 rounded-full">
      <div className="hover:bg-blue-400 p-2 rounded-full">
        <i className={value.classv}></i>
      </div>
    </a>
  ))}
</div>

        <div className="rightsection w-full md:w-1/2 flex justify-center items-center">
          <img
            src="./public/images/mkt.jpg"
            className="w-[80%] md:w-1/2 h-auto rounded-full relative -top-20 md:right-10 hidden md:block" // Added hidden md:block
            alt="Mahesh Kumar"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
