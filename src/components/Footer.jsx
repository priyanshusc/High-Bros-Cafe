import React from 'react';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Coffee className="w-8 h-8 text-accent" />
                            <span className="text-2xl font-display font-bold text-white">Chator Adda</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-primary-300">
                            Where taste meets comfort. Your favorite neighborhood spot for premium coffee, delicious food, and great conversations.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/chatoradda/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-display font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                            <li><a href="#menu" className="hover:text-accent transition-colors">Our Menu</a></li>
                            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
                            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-display font-bold mb-6 text-lg">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-display font-bold mb-6 text-lg">Newsletter</h4>
                        <p className="text-sm mb-4 text-primary-300">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-primary-800 border border-primary-700 rounded-l-lg px-4 py-2 focus:outline-none focus:border-accent text-white"
                            />
                            <button
                                type="submit"
                                className="bg-accent px-4 py-2 rounded-r-lg text-white font-medium hover:bg-accent/90 transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-400">
                    <p>© {new Date().getFullYear()} Diany N Bean Café. All rights reserved.</p>
                    <p>
  Designed with ❤️ by{" "}
  <a 
    href="https://www.priyanshusc.tech" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-accent font-bold hover:underline"
  >
    Priyanshu Singh Chauhan
  </a>
</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
