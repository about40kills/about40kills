import { useState } from 'react';
import { portfolioData } from '../data/portfolio-data';

export function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    {portfolioData.about.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            {portfolioData.about.description}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
                                <p className="text-gray-700 dark:text-gray-300">Computer Vision & Object Detection</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
                                <p className="text-gray-700 dark:text-gray-300">Software Development</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
                                <p className="text-gray-700 dark:text-gray-300">Real-time Processing Systems</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
                                <p className="text-gray-700 dark:text-gray-300">Machine Learning</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative group perspective-1000 w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-gray-900 dark:bg-white rounded-lg transform rotate-6 transition-transform group-hover:rotate-12"></div>

                            <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                                {/* Front Face: Profile Image */}
                                <div className="absolute inset-0 backface-hidden">
                                    <img
                                        src={portfolioData.about.image}
                                        alt={portfolioData.name}
                                        className="rounded-lg w-full h-full object-cover shadow-xl"
                                    />
                                </div>

                                {/* Back Face: NPC Card */}
                                <div
                                    className="absolute left-0 w-full h-[120%] -top-[10%] backface-hidden rotate-y-180 bg-gray-900 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer z-10"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <div className="w-full h-full">
                                        <img
                                            src="https://npc-api.aikins.xyz/v1/users/about40kills/card.png?theme=dark&orientation=vertical"
                                            alt="Now Playing"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Full Size Card */}
            {
                isModalOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div className="relative max-w-md w-full transform transition-all scale-100 hover:scale-105">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            <img
                                src="https://npc-api.aikins.xyz/v1/users/about40kills/card.png?theme=dark&orientation=vertical"
                                alt="Now Playing Full"
                                className="w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                )
            }
        </section >
    );
}
