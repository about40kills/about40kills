import { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'outline';
}

export function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
    const variants = {
        default: 'bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900',
        secondary: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50',
        outline: 'border border-gray-300 dark:border-gray-700',
    };

    return (
        <div
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
            {...props}
        />
    );
}
