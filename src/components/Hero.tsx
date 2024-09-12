import Link from 'next/link';
import ArrowWIcon from '../assets/icons/arrow-w.svg';

export const Hero = () => {
  return(
    <div className="bg-black text-white bg-[linear-gradient(to_bottom, #000, #200D42_34%, #4F21A1_65%, #A46EDB_82%)] py-[72px] relative overflow-clip">
      <div className="container">
        <h1 className='text-7xl font-bold tracking-tighter text-center mt-8 py-6'>
          <span className='overflow-hidden inline-block px-0.5 py-6'>
            <span className='inline-block translate-y-20 origin-bottom-left rotate-12 animate-[twist_1s_ease_0s_forwards] '>Knock</span>
          </span>{' '}
          <span className='overflow-hidden inline-block px-0.5 py-6 py-6'>
            <span className='inline-block translate-y-20 origin-bottom-left rotate-12 animate-[twist_1s_ease_0.15s_forwards] '>your</span>
          </span>{' '}
          <span className='overflow-hidden inline-block px-0.5 py-6'>
            <span className='inline-block translate-y-20 origin-bottom-left rotate-12 animate-[twist_1s_ease_0.30s_forwards] '>Docs</span>
          </span>{' '}
          <span className='overflow-hidden inline-block px-0.5 py-6'>
            <span className='inline-block translate-y-20 origin-bottom-left rotate-12 animate-[twist_1s_ease_0.45s_forwards] '>the</span>
          </span>{' '}
          <span className='overflow-hidden inline-block px-0.5 py-6'>
            <span className='inline-block translate-y-20 origin-bottom-left rotate-12 animate-[twist_1s_ease_0.60s_forwards] bg-gradient-to-r from-red-400 to-orange-300 text-transparent bg-clip-text'>FACt</span>
          </span>{' '}
          <span className='overflow-hidden inline-block px-0.5 py-6'>
            <span className='inline-block translate-y-20 origin-bottom-left rotate-12 animate-[twist_1s_ease_0.75s_forwards] '>way</span>
          </span>{' '} 
          </h1>
          <div className="flex items-center justify-center bg-base-400">
        <Link href="/about" className="inline-flex gap-3 border py-1 px-2 rounded-lg bg-whtie/30">
          <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]">Version 1.0</span>
          <span className='inline-flex items-center gap-1'>
          <span>Read More</span>
          <ArrowWIcon />
          </span>
        </Link>
        </div>  
      </div>
      <div className='py-4'></div>
    </div>
  );
};
