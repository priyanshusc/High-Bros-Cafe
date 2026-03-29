import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Location = () => {
    return (
        <section id="location" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 bg-primary-50 rounded-3xl overflow-hidden shadow-xl border border-primary-100">

                    {/* Info Side */}
                    <div className="w-full lg:w-1/3 p-8 md:p-12 self-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8"
                        >
                            Visit Us
                        </motion.h2>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                                    <p className="text-gray-600">India Expo Plaza<br />Greater Noida, Uttar Pradesh 201310</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-start gap-4"
                            >
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary-600">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Opening Hours</h4>
                                    <p className="text-gray-600">Mon - Fri: 7am - 8pm<br />Sat - Sun: 8am - 9pm</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex items-start gap-4"
                            >
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Contact</h4>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex items-start gap-4"
                            >
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                                    <p className="text-gray-600">hello@daisynbean.com</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="w-full lg:w-2/3 min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.056586047248!2d-122.42145328468206!3d37.76994767975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e22df6b91c7%3A0xe54d6faef4afab7d!2sDolores%20Park%20Cafe!5e0!3m2!1sen!2sus!4v1654848392110!5m2!1sen!2sus"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Café Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
