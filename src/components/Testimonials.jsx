import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/mockData';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4"
                    >
                        What Our Customers Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Don't just take our word for it. Here's what some of our regular patrons have to say about their experience at Chator Adda.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="bg-white p-8 rounded-3xl shadow-lg relative border border-primary-100"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100 rotate-180" />

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-primary-200"
                                />
                                <div>
                                    <h3 className="font-display font-bold text-gray-900">{review.name}</h3>
                                    <div className="flex text-accent mt-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 italic">"{review.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
