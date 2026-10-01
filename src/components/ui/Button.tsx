'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  type?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95',
  secondary:
    'border border-white/20 text-slate-200 font-medium hover:bg-white/5 hover:border-white/30',
  ghost: 'text-slate-300 font-medium hover:text-white hover:bg-white/5',
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, _ref) => {
    const {
      variant = 'primary',
      size = 'md',
      className,
      children,
      disabled,
    } = props;

    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-xl font-body transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]',
      sizeClasses[size],
      variantClasses[variant],
      disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
      className
    );

    const motionProps = {
      whileHover: disabled ? {} : { scale: 1.02 },
      whileTap: disabled ? {} : { scale: 0.98 },
      transition: { type: 'spring', stiffness: 400, damping: 25 },
    };

    if ('href' in props && props.href) {
      const isExternal =
        props.external || props.href.startsWith('http') || props.href.startsWith('mailto');
      return (
        <motion.a
          href={props.href}
          className={baseClasses}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          onClick={(props as ButtonAsLink).onClick}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }


    return (
      <motion.button
        className={baseClasses}
        disabled={disabled}
        onClick={(props as ButtonAsButton).onClick}
        type={(props as ButtonAsButton).type ?? 'button'}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
