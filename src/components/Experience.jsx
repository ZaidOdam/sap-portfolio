import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import techMahindraLogo from '../assets/tech-mahindra-logo.jpeg';

const experiences = [
    {
        company: 'Tech Mahindra',
        logo: techMahindraLogo,
        role: 'Software Engineer',
        location: 'Pune, India',
        date: 'September 2024 - Present',
        isCurrent: true,
        details: [
            'Delivered **SAP SuccessFactors Recruiting & Onboarding** support, resolving **1,000+ functional and configuration cases** for global enterprise clients.',
            'Configured and supported Recruiting solutions including **recruiting templates**, **candidate lifecycle**, **route maps**, **business rules**, and **offer letters**.',
            'Collaborated with clients and stakeholders to gather requirements, troubleshoot issues, and deliver **optimized HR solutions** aligned with business needs.',
            'Advised customers on **best-practice approaches** and SAP SuccessFactors system capabilities to optimize recruiting processes.',
            'Acted as **Support Team Coach**, leading and mentoring a team of 10 engineers to improve **case resolution quality** and **turnaround time**.'
        ]
    },
    {
        company: 'Tech Mahindra',
        logo: techMahindraLogo,
        role: 'Associate Software Engineer',
        location: 'Pune, India',
        date: 'August 2023 - August 2024',
        isCurrent: false,
        details: [
            'Provided functional product support for **SAP SuccessFactors Recruiting Management** customers across **EMEA and AMER regions**.',
            'Maintained **100% SLA compliance**, resolving the majority of cases within **48 hours**.',
            'Achieved **94% CSAT** through accurate resolutions, clear client communication, and low case re-open rates.',
            'Collaborated with **product area leads** and engineering teams to ensure consistent and high-quality support delivery.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-sap-bg-grey">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header - Minimal */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-sap-dark-blue"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Work Experience
                </motion.h2>

                {/* Vertical Journey Timeline */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Journey Path - The continuous line */}
                    <div className="absolute left-5 md:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-sap-blue via-sap-dark-blue to-sap-blue/30"></div>

                    {/* Experience Items */}
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                {/* Timeline Node - Square Logo */}
                                <div className="absolute left-0 top-6 z-10">
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center overflow-hidden ${exp.isCurrent
                                        ? 'ring-2 ring-sap-blue ring-offset-2'
                                        : 'ring-1 ring-gray-200'
                                        } bg-white shadow-md`}>
                                        {exp.logo ? (
                                            <img
                                                src={exp.logo}
                                                alt={exp.company}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <Building2
                                                size={20}
                                                className="text-sap-blue"
                                            />
                                        )}
                                    </div>
                                    {/* Pulse for current role */}
                                    {exp.isCurrent && (
                                        <motion.div
                                            className="absolute -inset-1 rounded-lg border-2 border-sap-blue"
                                            animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0, 0.8] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className="ml-16 md:ml-20">
                                    <motion.div
                                        className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-sap-blue/20 hover:bg-white hover:shadow-xl transition-all duration-300"
                                        whileHover={{ x: 4 }}
                                    >
                                        {/* Header with Current Badge */}
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-sap-dark-blue">
                                                    {exp.role}
                                                </h3>
                                                <p className="font-semibold text-sap-blue">{exp.company}</p>
                                            </div>
                                            {exp.isCurrent && (
                                                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        {/* Date & Location - Inside Card */}
                                        <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-gray-500">
                                            <span className="inline-flex items-center gap-1.5">
                                                <Calendar size={14} className="text-sap-blue" />
                                                {exp.date}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin size={14} className="text-sap-blue" />
                                                {exp.location}
                                            </span>
                                        </div>

                                        {/* Details */}
                                        <ul className="space-y-3">
                                            {exp.details.map((detail, i) => (
                                                <li
                                                    key={i}
                                                    className="relative pl-5 text-gray-600 text-sm md:text-base leading-relaxed"
                                                >
                                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-sap-blue"></span>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: detail.replace(
                                                                /\*\*(.*?)\*\*/g,
                                                                '<strong class="text-sap-dark-blue font-semibold">$1</strong>'
                                                            )
                                                        }}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Journey End Dot */}
                    <div className="absolute left-5 md:left-6 -bottom-2 transform -translate-x-1/2 ml-[1px]">
                        <div className="w-2 h-2 rounded-full bg-sap-blue/40"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
