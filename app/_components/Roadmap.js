import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Roadmap() {
  useEffect(() => {
    gsap.to('#groupcircle', {
      rotate: 0,
      ease: 'easeInOut',

      scrollTrigger: {
        trigger: '#groupcircle',
        start: 'top 130%',
        end: 'top 40%',
        scrub: 2,
        toggleActions: 'play none none none',
        markers: false,
      },
    });

  }, []);
  return (
    <div className='bg-blue text-purple py-12 md:py-20 md:px-20 px-6 2xl:px-32 overflow-hidden' id='roadmap'>
      <div className='header text-2xl md:text-5xl font-bold'>ROADMAP?CHECK.</div>
      <div className='flex flex-col md:flex-row items-center justify-between mt-4 ' >
        <div
          className='flex flex-col w-full md:w-[45vw] items-start justify-start gap-8 py-14 md:pl-0' id=''
        >
          <div className='flex justify-between items-center gap-6 text-lg md:text-2xl'>
            <div className='w-[10%] text-right font-bold '>
              Q2
              <br />
              2022
            </div>
            <div className='font-light' style={{ fontFamily: 'sora' }}>
              Provide PFP digital collectibles and AR-ready wearable helmets.
            </div>
          </div>
          <div className='flex justify-between items-center gap-6 text-lg md:text-2xl'>
            <div className='w-[10%] text-right font-bold '>
              Q3
              <br />
              2022
            </div>
            <div className='font-light' style={{ fontFamily: 'sora' }}>
              Deliver full-body 3D avatars for metaverse platforms & blockchain
              gaming.
            </div>
          </div>
          <div className='flex justify-between items-center gap-6 text-lg md:text-2xl'>
            <div className='w-[10%] text-right font-bold '>
              Q3
              <br />
              2023
            </div>
            <div className='font-light' style={{ fontFamily: 'sora' }}>
              {' '}👀 🎟 😉 😈
            </div>
          </div>
          <div className='flex justify-between items-center gap-6 text-lg md:text-2xl'>
            <div className='w-[10%] text-right font-bold '>2023</div>
            <div className='font-light' style={{ fontFamily: 'sora' }}>
              Expand globally via storytelling, partnerships, & brand marketing.
            </div>
          </div>
        </div>
        <Image
          src='/GroupCircle.png'
          alt='Primobot Logo'
          width={450}
          height={380}
          className='relative z-10 bottom-0 overflow-hidden rotate-45'
          id='groupcircle'
        />
      </div>
    </div>
  );
}

export default Roadmap;
