import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
    {
        name: "SAP SuccessFactors Recruiting - Recruiter Experience",
        url: "https://www.credly.com/badges/e95ba03f-b1bf-4d6e-9f52-bbc0e77aaa89/public_url"
    },
    {
        name: "SAP SuccessFactors Onboarding",
        url: "https://www.credly.com/badges/e64258db-f739-4f48-b13c-cc68c747a7a4/public_url"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-sap-bg-grey">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-sap-dark-blue"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Certifications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {certifications.map((cert, idx) => (
                        <motion.a
                            key={idx}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card flex items-center gap-6 group hover:border-sap-blue cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="bg-blue-50 p-4 rounded-full text-sap-blue flex-shrink-0 group-hover:bg-sap-blue group-hover:text-white transition-colors duration-300">
                                <Award size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-sap-dark-blue mb-2 group-hover:text-sap-blue transition-colors">
                                    {cert.name}
                                </h3>
                                <span className="text-sm font-medium text-sap-blue flex items-center gap-1 opacity-80 group-hover:opacity-100">
                                    Verify on Credly <ExternalLink size={14} />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
