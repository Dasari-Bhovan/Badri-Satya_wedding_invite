// import { motion } from 'framer-motion';
// import { weddingConfig } from '../../config/wedding-config';
// import { scrollAnimation, viewportSettings } from '../animations/scrollAnimations';

// interface HeroProps {
//   guestName?: string;
// }

// export default function Hero({ guestName }: HeroProps) {
//   return (
//     <motion.section 
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20"
//       variants={scrollAnimation}
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={viewportSettings}
//     >
//       {/* Background Image with Animated Overlay */}
//       <div
//         className="absolute inset-0 bg-[url('/images/background/ANN.webp')] bg-cover bg-center bg-no-repeat"
//         style={{
//           maskImage: 'url(/images/background/ANN.webp)',
//           maskPosition: 'center',
//           maskRepeat: 'repeat'
//         }}
//       >
//         <motion.div
//           className="absolute inset-0 bg-black/15"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//         />
//       </div>

//       {/* Content */}
//       {/* <div classNa"> */}
//       <div className="relative z-10 text-center px-4 max-w-2xl ml-auto mr-4 lg:mr-20 lg:text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-white/5 backdrop-blur-md p-6 rounded-2xl relative overflow-hidden"
//         >
//           {/* Creative Decorative Elements */}
//           <div className="absolute -bottom-8 -right-8 w-20 opacity-70 animate-float-slow">
//             <img
//               src="images/pattern/flower-2.webp"
//               alt=""
//               className="w-full h-full"
//             />
//           </div>
          
//           {/* Subtle Glow Effect */}
//           <div className="absolute inset-0 rounded-2xl animate-glow" />
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-white/80 text-xl mb-4"
//           >
//               You are invited to our wedding.
//           </motion.p>

//           <motion.div className="space-y-4">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8, duration: 1 }}
//               className="text-4xl md:text-6xl font-serif text-white"
//             >
//               {weddingConfig.couple.bride.name}
//             </motion.h1>
            
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
//               className="text-2xl md:text-3xl text-white/80"
//             >
//               &
//             </motion.div>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.4, duration: 1 }}
//               className="text-4xl md:text-6xl font-serif text-white"
//             >
//               {weddingConfig.couple.groom.name}
//             </motion.h1>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.1 }}
//             className="text-white/90 text-lg mt-4"
//           >
//             {new Date(weddingConfig.event.Marraige.date).toLocaleDateString('id-ID', {
//               day: 'numeric',
//               month: 'long',
//               year: 'numeric'
//             })}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
//       >
//         <div className="animate-bounce">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// }
import { motion } from 'framer-motion';
import { weddingConfig } from '../../config/wedding-config';
import { scrollAnimation, viewportSettings } from '../animations/scrollAnimations';

interface HeroProps {
  guestName?: string;
}

export default function Hero({ guestName }: HeroProps) {
  return (
    <motion.section 
      className="relative min-h-screen overflow-hidden"
      variants={scrollAnimation}
      initial="offscreen"
      whileInView="onscreen"
      viewport={viewportSettings}
    >
      {/* Background Image - Full screen on both mobile and desktop */}
      <div className="absolute inset-0">
        <img 
          src="/images/background/edit_ann_desktop.webp" 
          alt="Wedding" 
          className="w-full h-full object-cover"
        />
        {/* Darker overlay to improve text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" /> 
       </div>

      {/* Desktop Background Image - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        <img 
          src="/images/background/edit_ann_desktop.webp" 
          alt="Wedding - Desktop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      </div>

      {/* Mobile Background Image - Hidden on desktop */}
      <div className="absolute inset-0 md:hidden">
        <img 
          src="/images/background/edit_ann_mobile.webp" 
          alt="Wedding - Mobile" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      </div>


      {/* Responsive Wrapper */}

  {/* Desktop Positioning */}
  <div className="hidden md:block shadow-sm absolute  right-[10%]  top-1/2 max-w-2xl -translate-y-1/2">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black/10 backdrop-blur-md max-w-2xl p-6 rounded-3xl relative overflow-hidden text-center"
    >
      <div className="absolute -bottom-8 -right-8 w-20 opacity-70 animate-float-slow">
        <img src="images/pattern/flower-2.webp" alt="" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 rounded-2xl animate-glow" />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-white/80 text-2xl mb-4 font-cinzel w-full px-4 "
      >
        Join us as we begin our new journey
      </motion.p>
      <motion.div className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-4xl md:text-6xl font-cinzel text-white"
        >
          {weddingConfig.couple.bride.name}
        </motion.h1>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
          className="text-2xl md:text-3xl text-white/80 font-cinzel"
        >
          &
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-4xl md:text-6xl font-serif text-white font-cinzel"
        >
          {weddingConfig.couple.groom.name}
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="text-white/90 text-lg mt-4"
      >
        {new Date(weddingConfig.event.Marraige.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </motion.div>
    </motion.div>
  </div>
  
  {/* Mobile Positioning */}
 <div className='md:hidden absolute bottom-[7%] min-w-[320px] max-w-sm left-1/2 -translate-x-1/2'>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white/5 backdrop-blur-md  p-6 rounded-2xl relative overflow-hidden text-center"
    >
      <div className="absolute -bottom-8 -right-8 w-20 opacity-70 animate-float-slow">
        <img src="images/pattern/flower-2.webp" alt="" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 rounded-2xl animate-glow" />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-white/80 text-xl mb-4"
      >
        Join us as we begin our new journey
      </motion.p>
      <motion.div className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-4xl font-serif text-white"
        >
          {weddingConfig.couple.bride.name}
        </motion.h1>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
          className="text-2xl text-white/80"
        >
          &
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-4xl font-serif text-white"
        >
          {weddingConfig.couple.groom.name}
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="text-white/90 text-lg mt-4"
      >
        {new Date(weddingConfig.event.Marraige.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </motion.div>
    </motion.div>
 </div>




      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
}