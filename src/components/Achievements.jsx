import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';

const achievements = [
    {
        title: "Support Team Coach",
        description: "Led and mentored a team of 10 engineers, improving case resolution quality and reducing turnaround time by 15%.",
        link: "#"
    },
    {
        title: "100% SLA Compliance",
        description: "Consistently maintained 100% SLA compliance for critical cases across EMEA and AMER regions for 12 consecutive months.",
        link: "#"
    },
    {
        title: "94% CSAT Score",
        description: "Achieved and maintained a high Customer Satisfaction score through effective communication and technical expertise.",
        link: "#"
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-sap-dark-blue"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Achievements
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {achievements.map((achievement, idx) => (
                        <motion.div
                            key={idx}
                            className="card group relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Trophy size={100} className="text-sap-gold" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-sap-gold mb-6 group-hover:bg-sap-gold group-hover:text-white transition-colors">
                                    <Trophy size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-sap-dark-blue mb-3">{achievement.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {achievement.description}
                                </p>
                                <a
                                    href={achievement.link}
                                    className="inline-flex items-center gap-2 text-sap-blue font-semibold hover:gap-3 transition-all"
                                >
                                    View Details <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
