import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeDrawer();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`relative z-[1000] bg-purple text-blue p-4 md:px-16 flex justify-between items-center ${!isDrawerOpen && 'clip-path-nav'} md:mx-32`}>
      <div className="flex items-center">
        <Image src="/PLogo.png" alt="Primobots Logo" width={141} height={16} className="mr-2" />
      </div>
      <nav className="relative">
        <div className='flex justify-between items-center'>
          <ul className="hidden md:flex space-x-4 text-sm font-medium">
            <li><Link href="#story">STORY</Link></li>
            <li><Link href="#utility">UTILITY</Link></li>
            <li><Link href="#roadmap">ROADMAP</Link></li>
            <li><Link href="#team">TEAM</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
          </ul>
          <Image src="/iconframe.png" alt="Primobots Logo" width={90} height={16} className="hidden md:block ml-4" />
        </div>
        <button className={`md:hidden ${isDrawerOpen && 'hidden'}`} onClick={toggleDrawer}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className={`fixed top-0 right-0 w-full h-full bg-purple text-blue p-8 flex flex-col items-start z-[1100] transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex w-full justify-between items-center mb-4">
            <Image src="/PLogo.png" alt="Primobots Logo" width={141} height={16} className="" />
            <button className="self-end" onClick={toggleDrawer}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="space-y-4 text-sm font-medium w-full mt-12">
            <li><Link href="#story" onClick={toggleDrawer}>STORY</Link></li>
            <li><Link href="#utility" onClick={toggleDrawer}>UTILITY</Link></li>
            <li><Link href="#roadmap" onClick={toggleDrawer}>ROADMAP</Link></li>
            <li><Link href="#team" onClick={toggleDrawer}>TEAM</Link></li>
            <li><Link href="#faq" onClick={toggleDrawer}>FAQ</Link></li>
          </ul>
          <Image src="/iconframe.png" alt="Primobots Icon" width={90} height={16} className="mt-32" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
