import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  gradientWords?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  gradientWords,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  // If gradientWords is provided, replace the last occurrence in the title with gradient span
  const renderTitle = () => {
    if (!gradientWords) {
      return <span>{title}</span>;
    }
    const parts = title.split(gradientWords);
    if (parts.length < 2) return <span>{title}</span>;
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{gradientWords}</span>
        {parts.slice(1).join(gradientWords)}
      </>
    );
  };

  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3',
            align === 'center' ? 'text-center' : ''
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-100 leading-tight',
          align === 'center' ? 'text-center' : ''
        )}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-slate-400 text-lg max-w-2xl leading-relaxed',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export type { SectionHeadingProps };
