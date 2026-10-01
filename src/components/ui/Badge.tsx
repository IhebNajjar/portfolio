import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}

type BadgeVariant = 'default' | 'purple' | 'blue' | 'green' | 'amber' | 'indigo';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  size?: 'sm' | 'md';
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20',
  purple:
    'bg-violet-500/15 border border-violet-500/30 text-violet-300 hover:bg-violet-500/25',
  blue: 'bg-blue-500/15 border border-blue-500/30 text-blue-300 hover:bg-blue-500/25',
  indigo:
    'bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/25',
  green:
    'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25',
  amber:
    'bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25',
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export function Badge({
  children,
  variant = 'default',
  className,
  size = 'md',
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-medium transition-all duration-200 cursor-default select-none',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export type { BadgeProps, BadgeVariant };
