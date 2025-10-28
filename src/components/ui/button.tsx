import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
    children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

        const variants = {
            default: 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200',
            outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800',
            ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
        };

        const sizes = {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 px-3',
            lg: 'h-11 px-8',
            icon: 'h-10 w-10',
        };

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

        if (asChild && children) {
            // Clone the child element and merge props
            const child = children as React.ReactElement;
            return (
                <child.type
                    {...child.props}
                    className={`${classes} ${child.props.className || ''}`}
                    ref={ref}
                    {...props}
                />
            );
        }

        return (
            <button
                className={classes}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
