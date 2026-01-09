import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/resume.pdf';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative overflow-hidden bg-white">
            {/* Subtle background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-sap-blue/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 md:pt-40 md:pb-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Name with SAP dark blue gradient effect - dark to slightly lighter at end */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 whitespace-nowrap"
                            style={{
                                background: 'linear-gradient(90deg, #001d35 0%, #001d35 60%, #0a4d8c 85%, #1a5490 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Zaidmohamed Odam
                        </h1>

                        <span className="block text-xl md:text-2xl text-sap-blue font-semibold mb-6">
                            SAP SuccessFactors Consultant
                        </span>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            Enabling global enterprises to enhance recruiting and onboarding efficiency by delivering scalable SAP SuccessFactors configuration, support, and process optimization.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a href="#experience" className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 gap-2 bg-sap-dark-blue text-white hover:bg-sap-blue shadow-lg hover:shadow-sap-blue/25">
                                View Experience <ChevronRight size={18} />
                            </a>
                            <a href={resumePdf} download className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 gap-2 bg-transparent text-sap-dark-blue border-2 border-sap-dark-blue hover:bg-sap-dark-blue/5">
                                Download Resume <Download size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content with decorative elements */}
                    <motion.div
                        className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Decorative floating shapes - matching SAP TechEd colors */}
                            <motion.div
                                className="absolute -top-6 right-12 w-20 h-6 rounded-full"
                                style={{ background: 'linear-gradient(90deg, #4dd0e1, #26c6da)' }}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            ></motion.div>
                            <motion.div
                                className="absolute -top-4 right-0 w-28 h-6 rounded-full"
                                style={{ background: 'linear-gradient(90deg, #0a6ed1, #2196f3)' }}
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            ></motion.div>

                            {/* Main image container with circular frame */}
                            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                {/* Glowing ring effect with SAP dark blue */}
                                <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(135deg, #001d35 0%, #0a6ed1 50%, #001d35 100%)', padding: '4px' }}>
                                    <div className="w-full h-full rounded-full bg-white"></div>
                                </div>

                                {/* Profile image */}
                                <img
                                    src={profileImg}
                                    alt="Zaidmohamed Odam"
                                    className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full shadow-2xl"
                                    style={{ boxShadow: '0 0 60px rgba(0, 29, 53, 0.2)' }}
                                />
                            </div>

                            {/* Bottom decorative elements - matching SAP TechEd colors */}
                            <motion.div
                                className="absolute bottom-12 -left-8 w-8 h-8"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#0a6ed1" />
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-4 left-1/3 w-10 h-10"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#7c4dff" />
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-0 right-8 w-16 h-16 rounded-bl-[40px] border-4 border-pink-400"
                                style={{ borderTop: 'none', borderRight: 'none' }}
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
