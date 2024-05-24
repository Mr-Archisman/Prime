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
    <div className='bg-blue text-purple pt-12 md:py-20 pl-6 flex tems-center justify-center flex-col overflow-x-hidden' id='utility'>
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
          className='w-1/2 px-6 md:px-20 py-10'
          id='helmetImage'
        />
        <div className='w-1/2 flex gap-2 opacity-1' id='utility'>
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
            <button className='mt-6 capitalize bg-purple text-white py-2 px-4 text-base font-bold z-10 tracking-widest'>
              WATCH TUTORIAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utility;

{
  /* <div className="flex flex-col md:flex-row items-start mx-auto max-w-6xl">
        <div className="md:w-1/2 flex flex-col space-y-12 pr-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">01 WHOA! IS THAT A 3D HELMET?!</h2>
            <p className="mb-2">
              What good is a Primobot if you can’t use it? We’re providing you with a custom 3D helmet file that you can use to create an AR lens that can be used on Social Media, Zoom, Google Meet, etc..
            </p>
            <p className="mb-2">
              We’ve also provided the 3D avatars, which contain your full-body Primobots.
            </p>
            <p className="mb-4">
              We made a tutorial to teach you how to create a Primobots filter with our 3D helmet file:
            </p>
            <button className="bg-white text-purple py-2 px-4 font-bold rounded">WATCH TUTORIAL</button>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">02 SAY HI TO YOUR MEMBERSHIP PASS.</h2>
            <p className="mb-2">
              Your Primobot NFT serves as your membership pass to...
            </p>
            <ul className="list-disc list-inside">
              <li>IRL Experiences & Events</li>
              <li>Metaverse Meet-ups</li>
              <li>Private Discord Server</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">03 BE A PART OF A GLOBAL BRAND.</h2>
            <p className="mb-2">
              Our team has helped build brands like LinkedIn, Snapchat, and Google.
              We aim to build Primobots into a globally renowned brand via:
            </p>
            <ul className="list-disc list-inside">
              <li>Collaborations: NFT, Web3, & Crypto collaborations.</li>
              <li>Partnerships: Music, Entertainment, & Brand Partnerships.</li>
              <li>Storytelling: Creating an expansive Primobots story.</li>
              <li>IP: As our collective brand grows, so does your individual Primobot.</li>
              <li>Effective Marketing: Marketing that goes beyond just Twitter.</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center mt-12 md:mt-0">
          <div className="mb-6">
            <Image src="/Group 86.png" alt="Primobot Utility" width={400} height={300} />
          </div>
          <div className="flex justify-center space-x-6">
            <Image src="/small-image1.png" alt="Primobot Feature" width={100} height={100} />
            <Image src="/small-image2.png" alt="Primobot Feature" width={100} height={100} />
            <Image src="/small-image3.png" alt="Primobot Feature" width={100} height={100} />
          </div>
        </div>
      </div> */
}
