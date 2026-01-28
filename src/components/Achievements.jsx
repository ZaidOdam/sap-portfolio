import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, ExternalLink, ArrowRight } from 'lucide-react';

const achievements = [
    {
        title: "Bravo Award",
        date: "September 2024",
        description: "Recognized for dedication and hard work.",
        link: "https://drive.google.com/file/d/1GcixXKTmPFO9m5sB8IOGFJX2dWdGPTQq/view?usp=drive_link",
        icon: Trophy,
        color: "text-amber-500",
        bgGradient: "from-amber-400 to-orange-500",
        lightBg: "bg-amber-50"
    },
    {
        title: "Pat on the Back Award",
        date: "July 2025",
        description: "Outstanding contribution to SF RCM team with consistent KPI achievements and proactive leadership.",
        link: "https://drive.google.com/file/d/1JSRhGCvHg3pWFGZTbDfNGj7eGjjFsESG/view?usp=drive_link",
        icon: Award,
        color: "text-sap-blue",
        bgGradient: "from-sap-blue to-cyan-400",
        lightBg: "bg-blue-50"
    },
    {
        title: "Pat on the Back Award",
        date: "October 2025",
        description: "Exceeded KPIs with exceptional customer service and rapid skill advancement.",
        link: "https://drive.google.com/file/d/1BvVleqkoFWBs0vqqlwzmdtDXHawCqEpo/view?usp=drive_link",
        icon: Star,
        color: "text-purple-600",
        bgGradient: "from-purple-500 to-indigo-600",
        lightBg: "bg-purple-50"
    },
    {
        title: "Certificate of Appreciation",
        date: "October 2025",
        description: "Exemplary performance contributing to SAP and Tech Mahindra's growth.",
        link: "https://drive.google.com/file/d/1jUOYm4Zbn3xA9AGfV4CyFeu7xs7fCUQc/view?usp=drive_link",
        icon: Medal,
        color: "text-teal-600",
        bgGradient: "from-teal-400 to-emerald-600",
        lightBg: "bg-teal-50"
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 bg-sap-bg-grey relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-sap-dark-blue"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Achievements
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {achievements.map((achievement, idx) => {
                        const IconComponent = achievement.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                {/* Top Accent Line */}
                                <div className={`h-1.5 w-full bg-gradient-to-r ${achievement.bgGradient}`} />

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-3 rounded-2xl ${achievement.lightBg} ${achievement.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                            <IconComponent size={32} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border border-gray-100 px-2 py-1 rounded-md bg-gray-50">
                                            {achievement.date}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-sap-dark-blue mb-3 group-hover:text-sap-blue transition-colors">
                                        {achievement.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                                        {achievement.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-50">
                                        <a
                                            href={achievement.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-sap-blue hover:text-sap-dark-blue transition-colors"
                                        >
                                            View Certificate
                                            <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
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
