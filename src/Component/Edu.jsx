import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Edu() {
    const vh = {
        borderLeft: '5px solid white',
        height: '60vh',
    };
    const na = useRef(null);
    const na1 = useRef(null);
    const na2 = useRef(null);
    const na3 = useRef(null);
    const na4 = useRef(null);

    useEffect(() => {
        const n = na.current;
        const n1 = na1.current;
        const n2 = na2.current;
        const n3 = na3.current;
        const n4 = na4.current;

        gsap.to(n, {
            y: -170,
            duration: 5,
            scrollTrigger: {
                trigger: n,
                start: 'top 40%',
                end: 'bottom 20%',
                scrub: 1
            }
        });

        gsap.to(n1, {
            y: -150,
            duration: 7,
            scrollTrigger: {
                trigger: n1,
                start: 'top 50%',
                end: 'bottom 20%',
                scrub: 1,
            }
        });

        gsap.to(n2, {
            y: -130,
            duration: 10,
            scrollTrigger: {
                trigger: n2,
                start: 'top 45%',
                end: 'bottom 20%',
                scrub: 1,
            }
        });

        gsap.to(n3, {
            y: -150,
            duration: 10,
            scrollTrigger: {
                trigger: n3,
                start: 'top 45%',
                end: 'bottom 20%',
                scrub: 1,
            }
        });

        gsap.to(n4, {
            y: -150,
            duration: 10,
            scrollTrigger: {
                trigger: n4,
                start: 'top 50%',
                end: 'bottom 20%',
                scrub: 1,
            }
        });
    }, []);

    return (
        <div id="edu">
            <h1 className='font-bold text-5xl flex justify-center text-white mb-10'>Education & Experience</h1>
            <div className='h-screen w-full flex flex-col md:flex-row'>
                <div className='left w-full md:w-1/2'>
                    <div className='relative top-10 left-0 md:left-[25%]'> 
                        <div className="sslc bg-red-700 text-white w-[90%] md:w-[70%] flex-col px-5 py-5 rounded-md m-2" ref={na}>
                            <h1 className="font-bold text-xl">Secondary School Education (SSLC) - 70%</h1>
                            <h2 className="font-semibold">Kendriya Vidhyalaya Hisar Cantt. - Hisar</h2>
                        </div>
                        <div className="bt sslc bg-red-700 text-white w-[90%] md:w-[70%] flex-col px-5 py-5 m-2 rounded-md mt-7" ref={na2}>
                            <h1 className="font-bold text-xl">B.TECH CSBS , CGPA-8.2 (Till)</h1>  
                            <h2 className="font-semibold">PSNA College of Engineering & Technology</h2>
                        </div>
                        <div className="ofw sslc bg-red-700 text-white w-[90%] md:w-[70%] flex-col px-5 py-5 m-2 rounded-md mt-7" ref={na4}>
                            <h1 className="font-bold text-xl">Web Development Internship</h1>  
                            <h2 className="font-semibold">Oasis Infobyte PVT Lt. - Virtual</h2>
                        </div>
                    </div>
                </div>
                <div className='right w-full md:w-1/2' style={vh}>
                    <div className='relative left-0 md:left-[3%]'>
                        <div className="hsc sslc bg-red-700 text-white w-[90%] md:w-[70%] flex-col px-5 py-5 m-2 rounded-md mt-[20%]" ref={na1}>
                            <h1 className="font-bold text-xl">Higher Secondary Education (HSC) - 85%</h1>
                            <h2 className="font-semibold">Kendriya Vidhyalaya Hisar Cantt. - Hisar</h2>
                        </div>
                        <div className="fswd sslc bg-red-700 text-white w-[90%] md:w-[70%] flex-col px-5 py-5 m-2 rounded-md mt-[5%]" ref={na3}>
                            <h1 className="font-bold text-xl">Full Stack Internship</h1>
                            <h2 className="font-semibold">VEI Technology PVT Lt. - Chennai.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edu;
