import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-sap-bg-grey">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-sap-dark-blue"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                <motion.div
                    className="card max-w-3xl mx-auto flex items-center gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="hidden sm:flex bg-blue-50 p-6 rounded-full text-sap-blue flex-shrink-0">
                        <GraduationCap size={40} />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-sap-dark-blue mb-2">Sanjay Ghodawat University</h3>
                        <p className="text-xl font-semibold text-sap-blue mb-4">B.Tech in Computer Science and Engineering</p>
                        <div className="flex flex-wrap gap-6 text-gray-600 font-medium">
                            <span>2023</span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                CGPA: 9.23/10
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
