import { portfolioData } from '../data/portfolio-data';

export function Skills() {
    const categories = Array.from(new Set(portfolioData.skills.map(skill => skill.category)));

    return (
        <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Skills & Technologies
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <div key={category} className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                {category}
                            </h3>
                            <div className="space-y-3">
                                {portfolioData.skills
                                    .filter(skill => skill.category === category)
                                    .map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <p className="text-gray-700 dark:text-gray-300">{skill.name}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
