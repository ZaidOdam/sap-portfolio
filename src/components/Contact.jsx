import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            console.log('Form submitted:', formData);
            alert('Thank you for your message! I will get back to you soon.');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1000);
    };

    const contactItems = [
        {
            icon: Phone,
            label: 'Phone',
            value: '+91-7744080417',
            href: 'tel:+917744080417',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'zaidodam@gmail.com',
            href: 'mailto:zaidodam@gmail.com',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Connect on LinkedIn',
            href: 'https://www.linkedin.com/in/zaidmohamed-odam-b78827194',
            external: true
        }
    ];

    return (
        <section id="contact" className="py-16 bg-white text-sap-text">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl font-bold text-sap-dark-blue">Get in Touch</h2>
                </motion.div>

                <div className="flex flex-col gap-10">
                    {/* Contact Details - Horizontal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                    >
                        {contactItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-4 group p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-sap-blue/30 hover:shadow-md transition-all duration-300 w-full justify-start"
                            >
                                <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-sap-blue shadow-sm group-hover:scale-110 transition-transform">
                                    <item.icon size={22} />
                                </div>
                                <div className="min-w-0 overflow-hidden text-left">
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                                    <p className="font-semibold text-sap-dark-blue truncate">{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-sap-dark-blue mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sap-blue focus:ring-1 focus:ring-sap-blue outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-sap-dark-blue mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sap-blue focus:ring-1 focus:ring-sap-blue outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-sap-dark-blue mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sap-blue focus:ring-1 focus:ring-sap-blue outline-none transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-sap-dark-blue mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sap-blue focus:ring-1 focus:ring-sap-blue outline-none transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div className="pt-4 text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex py-4 px-12 rounded-xl bg-sap-blue text-white font-semibold items-center justify-center gap-2 hover:bg-sap-dark-blue transition-colors disabled:opacity-70 min-w-[200px] shadow-lg shadow-sap-blue/20"
                                >
                                    {isSubmitting ? 'Sending...' : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
