import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories } from '../data/mockData';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].category);

    return (
        <section id="menu" className="py-20 bg-primary-50 relative">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4"
                    >
                        Explore Our Menu
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        From freshly roasted artisanal coffees to our chef's special pastries and main courses, everything is prepared with love and the finest ingredients.
                    </motion.p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {menuCategories.map((cat, index) => (
                        <motion.button
                            key={cat.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setActiveCategory(cat.category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === cat.category
                                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30'
                                    : 'bg-white text-gray-600 hover:bg-primary-100 hover:text-primary-800'
                                }`}
                        >
                            {cat.category}
                        </motion.button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary-100/50">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
                        >
                            {menuCategories
                                .find((c) => c.category === activeCategory)
                                ?.items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <div className="flex justify-between items-baseline mb-2 border-b border-dashed border-gray-300 pb-2">
                                            <h3 className="text-xl font-display font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                                {item.name}
                                            </h3>
                                            <span className="text-lg font-bold text-accent ml-4">{item.price}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                                    </motion.div>
                                ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Menu;
