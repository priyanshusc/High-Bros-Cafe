import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-primary-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&auto=format&fit=crop&q=60"
                                alt="Café Interior"
                                className="w-full h-[500px] object-cover"
                            />
                        </motion.div>

                        {/* Decorative Element */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-600 rounded-full z-0 opacity-20"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20"
                        >
                            <div className="text-center">
                                <span className="block text-4xl font-display font-bold text-accent">10+</span>
                                <span className="text-gray-600 font-medium">Years of Brewing</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-medium uppercase tracking-wider mb-2"
                        >
                            Our Story
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
                        >
                            A passion for coffee, a love for community.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4 text-gray-600 text-lg"
                        >
                            <p>
                                Founded in the heart of the city, <span className="text-primary-700 font-bold">Daisy N Bean Café</span> began with a simple mission: to create a space where people could disconnect from their busy lives and reconnect with each other over an exceptional cup of coffee.
                            </p>
                            <p>
                                We believe in quality without compromise. That is why we source our beans from sustainable, direct-trade farms, and our ingredients are locally sourced whenever possible. Every pastry is baked fresh daily by our artisanal bakers.
                            </p>
                            <p>
                                Whether you're looking for a quiet corner to read, a lively spot to meet friends, or just the perfect espresso to start your day, we've carefully designed our café to be your home away from home.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 pt-8 border-t border-primary-300"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_placeholder.svg"
                                alt="Founder Signature"
                                className="h-12 opacity-60 mix-blend-multiply filter contrast-200"
                            />
                            <p className="mt-2 text-primary-900 font-display font-bold">Rahul Sharma</p>
                            <p className="text-sm text-gray-500">Founder & Head Roaster</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
