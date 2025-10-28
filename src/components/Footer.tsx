import { portfolioData } from '../data/portfolio-data';

export function Footer() {
    return (
        <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
