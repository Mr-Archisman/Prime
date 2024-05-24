'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../globals.css';
gsap.registerPlugin(ScrollTrigger);

const MintSection = () => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    gsap.to('#text', {
      y: -5,
      opacity: 1,

      scrollTrigger: {
        trigger: '#text',
        start: 'top 60%',
        end: 'top 15%',
        scrub: 2,
        toggleActions: 'play none none none',
        markers: false, // This will show start and end markers for debugging
      },
    });
    gsap.from('#image', {
      transform: 'translateY(40%)',

      scrollTrigger: {
        trigger: '#text',
        start: 'top 50%',
        end: 'top 0%',
        scrub: 2,
        toggleActions: 'play none none none',
        markers: false, // This will show start and end markers for debugging
      },
    });
  }, []);

  return (
    <div
 
      
      className='flex items-center flex-col bg-blue '
    >
      <section className='text-center py-10 opacity-0 px-12' id='text'>
        <h1 className='text-4xl md:text-7xl font-bold text-purple '>
          FULLY 3D-READY PRIMOBOTS.
        </h1>
        <p className='text-4xl md:text-5xl 2xl:text-7xl mt-4 text-purple font-bold font-outer-sans-outline font-outline leading-tight'>
          A STORY-DRIVEN WEB3 BRAND.
        </p>
        <div className='flex justify-center items-center flex-col md:flex-row mt-6 gap-5 md:gap-8'>
          <p className=' text-lg font-bold text-purple'>555/5555 MINTED</p>
          <div className='flex font-bold items-center text-xl  rounded px-2 py-1'>
            <button
              onClick={handleDecrement}
              className='border-2 border-purple text-purple px-2 hover:bg-yellow transition duration-300'
            >
              -
            </button>
            <span className='mx-3 text-purple'>{count}</span>
            <button
              onClick={handleIncrement}
              className='border-2 border-purple text-purple px-2 hover:bg-yellow transition duration-300'
            >
              +
            </button>
          </div>
          <button className=' bg-purple text-white font-bold py-2 px-4 hover:bg-yellow hover:text-purple transition duration-300 hover:scale-105'>
            MINT NOW
          </button>
          <p className='text-lg font-bold text-purple'>0.044 ETH</p>
        </div>
      </section>
      <section
        id='image'
        className='w-full h-full flex items-center justify-center relative z-20 bg-blue'
      >
        <Image
          src='HOMERIME.svg'
          alt='Primobots Logo'
          width={650}
          height={600}
          className=''
        />
      </section>
    </div>
  );
};

export default MintSection;
