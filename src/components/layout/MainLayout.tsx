import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../../config/wedding-config';
import MusicPlayer from '../features/MusicPlayer';
import Footer from './Footer';
import Navbar from './Navbar';
// import { motion } from 'framer-motion';
import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';
import QuranicVerses from '../sections/QuranicVerses';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
  guestName?: string;
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" className="p-8 text-center">
      <h2 className="text-2xl font-bold text-wedding-text mb-4">Something went wrong</h2>
      <p className="text-wedding-text/80">{error.message}</p>
    </div>
  );
}

export default function MainLayout({ children, guestName }: MainLayoutProps) {
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    // Automatically set loading state to false without any interaction
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Head>
        <title>{`${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name} Wedding`}</title>
        <meta name="description" content={`Wedding invitation for ${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`} />
      </Head>

      {/* <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} /> */}
      <div className="relative overflow-x-hidden">

        {/* Animated Background */}
        {/* <div className="fixed inset-0 bg-[url('/images/pattern/subtle-pattern.webp')] bg-repeat bg-[length:100px] md:bg-[length:200px] opacity-50 animate-move-bg z-10" hidden ></div> */}
        {/* <div className="fixed inset-0 bg-[url('c:\Users\bhova\Downloads\0W9A6348.JPG')] bg-repeat bg-[length:100px] md:bg-[length:200px] opacity-50 animate-move-bg z-10" hidden ></div> */}
        
        {/* Main Con  tent */}
        <div className="relative z-30" >
          
          <section className="relative" hidden>
            {/* <div className='border border-red-600 absolute'>Hai</div> */}

            <h3 className="text-xl text-white/80 mb-4 font-light">
              {guestName ? `Dear ${guestName},` : 'We are getting married!'}
            </h3>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              {guestName ? `We are getting married!` : `${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`}
            </h1>
          </section>
{/* <Navbar/>
<motion.div
      className="px-6 md:px-12 lg:px-24 mt-20"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-[1.7rem] font-medium font-cinzel">We're getting married</h3>
      <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-medium leading-tight font-cinzel">
        Aman. & Gur.
      </h1>

      <div className="mt-20 flex flex-col lg:flex-row justify-between items-start gap-6">
        <div className="font-quicksand text-[1.1rem] md:text-[1.3rem] leading-relaxed">
          Friday, Oct. 20, 2023 <br />
          ITC Sonar Bangla, Kolkata

          <button className="block text-base bg-transparent border border-[#212121] px-10 py-5 rounded-full mt-8 hover:text-gray-500 hover:border-gray-500">
            RSVP
          </button>
        </div> */}

        {/* Desktop Image */}
        {/* <motion.div
          className="hidden lg:block h-[90vh] w-full max-w-[50vw] bg-cover bg-center rounded-md"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/chuck-842bb.appspot.com/o/GurAmanWed%2Fpic1.jpg?alt=media&token=5dbf5af2-354b-464c-9db2-7da57b484eda')`,
            backgroundPositionX: '-100px',
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        /> */}

        {/* Mobile Image */}
        {/* <motion.div
          className="block lg:hidden w-full h-[50vh] bg-cover bg-center rounded-md"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/chuck-842bb.appspot.com/o/GurAmanWed%2Fpic1.jpg?alt=media&token=5dbf5af2-354b-464c-9db2-7da57b484eda')`,
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div> */}
    
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}
