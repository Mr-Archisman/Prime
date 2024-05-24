import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function UtilityBottom() {
  useEffect(() => {
    gsap.from('#utilityBottom', {
      transform: 'translateX(150%)',
      ease: 'easeInOut',

      scrollTrigger: {
        trigger: '#utilityBottom',
        start: 'top 120%',
        end: 'top 70%',
        scrub: 2,
        toggleActions: 'play none none none',
        markers: false,
      },
    });
  }, []);
  return (
    <div className='bg-blue text-purplerelative flex flex-col md:flex-row tems-center justify-between pl-6 md:pl-20 2xl:pl-32  pt-8 md:pt-12'>
      <div className='relative z-10 flex flex-col gap-6'>
        <div className='flex gap-2'>
          <div>
            <span className='text-sm md:text-3xl font-bold p-1.5 border-4 border-purple'>
              02
            </span>
          </div>
          <div>
            <h2 className='text-2xl md:text-5xl font-bold mb-4'>
              SAY HI TO YOUR <br />
              MEMBERSHIP PASS.
            </h2>
            <div
              style={{ fontFamily: 'sora' }}
              className='font-light text-xl leading-6'
            >
              <p className='mb-4'>
                Your Primobot NFT serves as your membership pass to...
              </p>
              <ul className='list-inside mb-4'>
                <li className='flex items-center mb-2'>
                  <span className='w-2 h-2 bg-purple inline-block mr-2'></span>
                  IRL Experiences & Events
                </li>
                <li className='flex items-center mb-2'>
                  <span className='w-2 h-2 bg-purple inline-block mr-2'></span>
                  Metaverse Meet-ups
                </li>
                <li className='flex items-center mb-2'>
                  <span className='w-2 h-2 bg-purple inline-block mr-2'></span>
                  Private Discord Server
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex gap-2'>
          <div>
            <span className='text-sm md:text-3xl font-bold p-1.5 border-4 border-purple'>
              03
            </span>
          </div>
          <div>
            <h2 className='text-2xl md:text-5xl font-bold mb-4'>
              BE A PART OF A GLOBAL <br />
              BRAND.
            </h2>
            <div
              style={{ fontFamily: 'sora' }}
              className='font-light text-xl leading-6'
            >
              <p className='mb-4'>
                Our team has helped build brands like LinkedIn, Snapchat, and
                Google.
                <br />
                We aim to build Primobots into a globally renowned brand via
              </p>
              <ul className='list-inside mb-4'>
                <li className='flex flex-col md:flex-row items-start md:items-center mb-2'>
                  <span className='w-2 h-2 bg-purple hidden md:inline-block mr-2'></span>
                  <span className='font-semibold'>Collaborations: </span> NFT,
                  Web3, & Crypto collaborations.
                </li>
                <li className='flex flex-col md:flex-row items-start md:items-center mb-2'>
                  <span className='w-2 h-2 bg-purple hidden md:inline-block mr-2'></span>
                  <span className='font-semibold'>Partnerships: </span> Music,
                  Entertainment, & Brand Partnerships.
                </li>
                <li className='flex flex-col md:flex-row items-start md:items-center mb-2'>
                  <span className='w-2 h-2 bg-purple hidden md:inline-block mr-2'></span>
                  <span className='font-semibold'>Storytelling: </span> Creating
                  an expansive Primobots story.
                </li>
                <li className='flex flex-col md:flex-row items-start md:items-center mb-2'>
                  <span className='w-2 h-2 bg-purple hidden md:inline-block mr-2'></span>
                  <span className='font-semibold'>IP: </span> As our collective
                  brand grows, so does your individual Primobot.
                </li>
                <li className='flex flex-col md:flex-row items-start md:items-center mb-2'>
                  <span className='w-2 h-2 bg-purple hidden md:inline-block mr-2'></span>
                  <span className='font-semibold'>Effective Marketing: </span>{' '}
                  Marketing that goes beyond just Twitter.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Image
        src='/bigModel.png'
        alt='Primobot Logo'
        width={350}
        height={400}
        className='relative z-0 bottom-0 max-sm:-right-20 overflow-x-hidden'
        id='utilityBottom'
      />
    </div>
  );
}

export default UtilityBottom;
