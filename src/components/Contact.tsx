import { Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

export function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    {portfolioData.contact.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                    {portfolioData.contact.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                    <a
                        href={`mailto:${portfolioData.contact.email}`}
                        className="flex items-center space-x-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                        <Mail size={20} />
                        <span>Send Email</span>
                    </a>
                    <a
                        href={portfolioData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors"
                    >
                        <Github size={20} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href={portfolioData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors"
                    >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
