import { portfolioData } from '../data/portfolio-data';

export function About() {
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
                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-900 rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
                                    <a
                                        href="https://npc.aikins.xyz/about40kills"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full h-full"
                                    >
                                        <img
                                            src="https://npc-api.aikins.xyz/v1/users/about40kills/card.png?theme=dark&orientation=vertical"
                                            alt="Now Playing"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
