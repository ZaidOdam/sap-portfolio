import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "SAP SuccessFactors",
            skills: ["Recruiting Management (RCM)", "Onboarding 2.0 (ONB)", "Recruiting Marketing (RMK)"]
        },
        {
            title: "Soft Skills",
            skills: ["Client Communication", "SLA Management", "Problem Solving", "Team Leadership", "Case Resolution"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-sap-dark-blue"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="card h-full"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <h3 className="text-xl font-bold text-sap-dark-blue border-b-2 border-sap-gold inline-block pb-2 mb-6">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-sap-dark-blue border border-blue-100 hover:border-sap-blue hover:text-sap-blue transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
