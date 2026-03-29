import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop")',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/90 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wider uppercase mb-6">
                        Welcome to
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 drop-shadow-lg">
                        Daisy N Bean <span className="text-accent italic">Café</span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light mb-10">
                        Where Taste Meets Comfort. Experience the perfect blend of artisanal coffee and culinary delight.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#menu"
                            className="px-8 py-4 rounded-full bg-primary-600 text-white font-medium flex items-center gap-2 hover:bg-primary-700 transition shadow-lg w-full sm:w-auto justify-center text-lg"
                        >
                            View Menu <ArrowRight className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#location"
                            className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 font-medium flex items-center gap-2 hover:bg-white/20 transition shadow-lg w-full sm:w-auto justify-center text-lg"
                        >
                            <MapPin className="w-5 h-5" /> Find Us
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-white/80 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
