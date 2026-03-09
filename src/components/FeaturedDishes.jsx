import React from 'react';
import { motion } from 'framer-motion';
import { featuredDishes } from '../data/mockData';

const FeaturedDishes = () => {
    return (
        <section id="featured" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-medium uppercase tracking-wider mb-2"
                    >
                        Handpicked
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-bold text-gray-900"
                    >
                        Our Chef's Recommendations
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredDishes.map((dish, index) => (
                        <motion.div
                            key={dish.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary-900 font-bold shadow-md">
                                    {dish.price}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{dish.name}</h3>
                                <p className="text-gray-600 text-sm line-clamp-2">{dish.description}</p>
                                <button className="mt-4 text-primary-600 font-medium hover:text-primary-800 transition-colors flex items-center gap-1 group/btn">
                                    Order Now
                                    <span className="transform transition-transform group-hover/btn:translate-x-1">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedDishes;
