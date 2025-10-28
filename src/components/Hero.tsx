import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

export function Hero() {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % portfolioData.hero.roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4">
                    {portfolioData.hero.greeting}
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                    {portfolioData.hero.name}
                </h1>
                <div className="h-12 md:h-16 mb-6">
                    <p className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white animate-fade-in">
                        {portfolioData.hero.roles[currentRole]}
                    </p>
                </div>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                    {portfolioData.hero.description}
                </p>
                <div className="flex justify-center space-x-6 mb-8">
                    <a
                        href={portfolioData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href={portfolioData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href={`mailto:${portfolioData.email}`}
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>
                <div className="flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
                    >
                        View My Work
                    </a>
                    <a
                        href="/resume"
                        className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors font-medium"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
