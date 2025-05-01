import { motion } from 'framer-motion';

export default function EventDetails() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif mb-4 text-white">Save the Date</h2>
            <p className="text-white/90">We invite you to celebrate our special day</p>

            {/* 📽️ Responsive YouTube Embed */}
            <div className="mt-8 w-full">
              <div className="relative w-full rounded-xl overflow-hidden
                              pt-[56.25%] md:pt-0 md:h-[80vh]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/loIcQR8Q8Jc?si=3lMFwxM2X2V7eLNP" // Replace with actual ID
                  title="Wedding Invite Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
