import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, ExternalLink } from 'lucide-react';

const achievements = [
    {
        title: "Bravo Award",
        date: "September 2024",
        description: "Recognized for dedication and hard work.",
        link: "https://drive.google.com/file/d/1GcixXKTmPFO9m5sB8IOGFJX2dWdGPTQq/view?usp=drive_link",
        icon: Trophy,
        bgColor: "bg-orange-600"
    },
    {
        title: "Pat on the Back Award",
        date: "July 2025",
        description: "Outstanding contribution to SF RCM team with consistent KPI achievements and proactive leadership.",
        link: "https://drive.google.com/file/d/1JSRhGCvHg3pWFGZTbDfNGj7eGjjFsESG/view?usp=drive_link",
        icon: Award,
        bgColor: "bg-blue-600"
    },
    {
        title: "Pat on the Back Award",
        date: "October 2025",
        description: "Exceeded KPIs with exceptional customer service and rapid skill advancement.",
        link: "https://drive.google.com/file/d/1BvVleqkoFWBs0vqqlwzmdtDXHawCqEpo/view?usp=drive_link",
        icon: Star,
        bgColor: "bg-purple-600"
    },
    {
        title: "Certificate of Appreciation",
        date: "2025",
        description: "Exemplary performance contributing to SAP and Tech Mahindra's growth.",
        link: "https://drive.google.com/file/d/1jUOYm4Zbn3xA9AGfV4CyFeu7xs7fCUQc/view?usp=drive_link",
        icon: Medal,
        bgColor: "bg-teal-600"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {achievements.map((achievement, idx) => {
                        const IconComponent = achievement.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`${achievement.bgColor} p-5 text-white`}>
                                    <div className="flex items-center justify-between">
                                        <IconComponent size={28} />
                                        <span className="text-xs font-medium bg-white/25 px-2 py-1 rounded-full">
                                            {achievement.date}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold mt-3">{achievement.title}</h3>
                                </div>

                                <div className="p-5">
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {achievement.description}
                                    </p>
                                    <a
                                        href={achievement.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sap-blue font-semibold text-sm hover:gap-3 transition-all"
                                    >
                                        View Certificate <ExternalLink size={14} />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
