import React from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/mockData';
import { Instagram } from 'lucide-react';

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4"
                        >
                            Moments at Daisy N Bean
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600"
                        >
                            Follow us on Instagram to see more of our daily creations and the beautiful moments shared in our café.
                        </motion.p>
                    </div>
                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        href="https://www.instagram.com/daisynbeancafe/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-primary-600 font-medium hover:text-primary-800 transition-colors mt-6 md:mt-0"
                    >
                        <Instagram className="w-5 h-5" /> @daisynbeancafe
                    </motion.a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative overflow-hidden rounded-2xl group ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
                                }`}
                        >
                            <div className={`w-full ${index === 0 || index === 3 ? 'h-64 md:h-[500px]' : 'h-48 md:h-[240px]'}`}>
                                <img
                                    src={img}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Instagram className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <a 
                        href="https://www.instagram.com/daisynbeancafe/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-800 transition-colors"
                    >
                        <Instagram className="w-5 h-5" /> Follow @daisynbeancafe
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
