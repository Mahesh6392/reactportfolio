import React from 'react';
import 'remixicon/fonts/remixicon.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
    const onelast = useRef(null);

    useEffect(() => {
        const on = onelast.current;
        gsap.to(on, {
            x: 70,
            duration: 4,
            scrollTrigger: {
                trigger: on,
                start: "top 60%",
                end: "bottom 20%",
                scrub: 1
            }
        });
    }, []);

    return (
        <>
            <div className='h-screen w-full mt-[40%]' id="contact">
                <h1 className='text-white font-bold text-5xl flex justify-center'>Get In Touch</h1>
                <div className='flex'>
                    <div className='left h-[300%] w-1/2'>
                        <div className="first w-[60%] h-[70%] bg-blue-700 rounded-md m-8" ref={onelast}>
                            <img src="https://padmakumar-rp.vercel.app/static/media/contactImg.acf38045a2182410a187.png" alt="" className='w-full flex  p-5 rounded mt-3' />
                            <div className="head px-4">
                                <h1 className='text-xl font-bold'>M Mahesh Kumar</h1>
                                <h2 className='font-semibold'>Web Developer</h2>
                            </div>
                            <p className='p-4'>As an accomplished Software Developer, I've excelled in 7+ hackathons, completed 8+ projects, and I have a lot of mini projects in my GitHub repository. With strong communication, programming, and digital marketing skills. If you want my service, get in touch.</p>
                            <p className='relative left-4'>Phone: 9003334771</p>
                            <p className='relative left-4'>Email: mmk6392771@gmail.com</p>
                            <div className='flex justify-center gap-10 mt-5 mb-5'>
                                <a href="#" className="hover:bg-blue-400 hover:rounded-full bg-red-600 rounded-full">
                                    <div className="hover:bg-blue-400 hover:rounded-full p-2 rounded-full">
                                        <i className="ri-linkedin-fill"></i>
                                    </div>
                                </a>
                                <a href="#" className="hover:bg-blue-400 hover:rounded-full">
                                    <div className="hover:bg-blue-400 hover:rounded-full p-2 rounded-full bg-red-600 rounded-full">
                                        <i className="ri-github-fill"></i>
                                    </div>
                                </a>
                                <a href="#" className="hover:bg-blue-400 hover:rounded-full bg-red-600 rounded-full">
                                    <div className="hover:bg-blue-400 hover:rounded-full p-2 rounded-full">
                                        <i className="ri-instagram-line"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='right bg-gray-700 p-10 mt-7 rounded-md'>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="618518de-2e62-4808-bd72-180cbd78df02" />
                            <div className='flex gap-4'>
                                <input type="text" placeholder='Name' className='px-3 py-3 rounded-md' required name="name" />
                                <input type="text" placeholder='Phone Number' className='px-3 py-3 rounded-md' required name="phone" />
                            </div>
                            <div className='mt-5'>
                                <input type="email" placeholder='E-mail' className='w-full px-3 py-3 rounded-md' required name="email" />
                            </div>
                            <div className='mt-5'>
                                <input type="text" placeholder='Subject' className='w-full px-3 py-3 rounded-md' required name="subject" />
                            </div>
                            <div className='mt-5'>
                                <textarea placeholder='Message' className='w-full h-80 px-3 py-3 rounded-md' name="message" required />
                            </div>
                            <button className='w-full bg-gray-600 text-white px-3 py-3 mt-5 rounded-md'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
