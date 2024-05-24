import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Utility = () => {
  useEffect(() => {
    gsap.from('#helmetImage', {
      transform: 'translateX(-150%)',
      ease: 'easeInOut',

      scrollTrigger: {
        trigger: '#helmetImage',
        start: 'top 130%',
        end: 'top 80%',
        scrub: 2,
        toggleActions: 'play none none none',
        markers: false,
      },
    });
    
  }, []);
  return (
    <div className='bg-blue text-purple pt-12 md:pt-20 px-6 md:px-20 2xl:px-32 flex tems-center justify-center flex-col overflow-hidden' id='utility' >
      <div>
        <h1 className='text-4xl md:text-7xl font-bold text-center mb-4'>
          UTILITY FROM DAY ONE.
        </h1>
        <p
          className='text-center text-lg md:text-2xl mb-6 leading-4'
          style={{ fontFamily: 'sora' }}
        >
          Our Motto: Underpromise, Overdeliver.
          <br />
          Here’s what we’re committed to getting done, from day one.
        </p>
      </div>
      <div
        className='flex flex-col md:flex-row tems-center justify-between mt-4'
        
      >
        <Image
          src='/helmet.png'
          alt='Primobot Feature'
          width={400}
          height={300}
          className='md:w-1/2 px-6 md:px-20 py-10'
          id='helmetImage'
        />
        <div className='md:w-1/2 flex gap-2 opacity-1' id='utility'>
          <div>
            <span className='text-sm md:text-3xl font-bold p-1.5 border-4 border-purple'>
              01
            </span>
          </div>
          <div>
            <h2 className='text-2xl md:text-5xl font-bold mb-4'>
              WHOA! IS THAT A 3D HELMET?!
            </h2>
            <div
              style={{ fontFamily: 'sora' }}
              className='font-light text-xl leading-6'
            >
              <p className='mb-4'>
                What good is a Primobot if you can’t use it? We’re providing you
                with a custom 3D helmet file that you can use to create an AR
                lens that can be used on Social Media, Zoom, Google Meet, etc..
              </p>
              <p className='mb-4'>
                We’ve also provided the 3D avatars, which contain your full-body
                Primobots.
              </p>
              <p className='mb-4'>
                We made a tutorial to teach you how to create a Primobots filter
                with our 3D helmet file:
              </p>
            </div>
            <button className='mt-6 capitalize bg-purple hover:bg-yellow hover:text-purple hover:scale-105 transition duration-300 text-white py-2 px-4 text-base font-bold z-10 tracking-widest'>
              WATCH TUTORIAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utility;


