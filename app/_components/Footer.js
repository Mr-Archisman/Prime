import Image from 'next/image';

const Footer = () => {
  return (
    <footer id='faq' className=''>
    <div className="bg-[#CBE3E2] text-purple py-12 md:py-20 px-6 md:px-32 flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 flex flex-col md:pl-24 md:pr-10 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-7xl font-bold mb-4">F.A.Q.</h2>
        <p className="text-lg md:text-2xl mb-4" style={{ fontFamily: 'sora' }}>
          Got any questions about Primobots? <br /> Or even NFTs in general?
        </p>
        <button className="bg-purple text-white w-fit py-2 px-4 text-base font-bold">
          LEARN MORE
        </button>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10">
        <h2 className="text-4xl md:text-7xl font-bold mb-4">PRESS</h2>
        <div className="text-lg md:text-2xl space-y-4 underline" style={{ fontFamily: 'sora' }}>
          <p>
            <span className="font-bold">Benzinga</span> · PRIMOBOTS: A New and <br />Innovative Project in The NFT Space →
          </p>
          <p>
            <span className="font-bold">Benzinga</span> · PRIMOBOTS: A New and <br />Innovative Project in The NFT Space →
          </p>
        </div>
      </div>
    </div>
    <div className="bg-purple text-white py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left px-6 md:px-20 font-light" style={{fontFamily:'sora'}}>
    <div className="flex items-center space-x-2 mb-4 md:mb-0">
      <Image src="/footerlogo.png" alt="Primobot Logo" width={160} height={80} />
      
    </div>
    <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-xs md:text-sm mb-4 md:mb-0 font-extralight">
      <span>Verified Smart Contract</span>
      <span>OpenSea</span>
      <span>Twitter</span>
      <span>Instagram</span>
      <span>Terms & Conditions</span>
      <span>License</span>
    </div>
    <div className="text-xs md:text-sm font-extralight w-1/5">
      For any queries or press-related requests, please contact{' '}
      <a href="mailto:hi@primobots.io" className="font-bold underline">
        hi@primobots.io
      </a>
    </div>
  </div>
  </footer>
  );
};

export default Footer;
