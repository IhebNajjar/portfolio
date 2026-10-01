'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

interface UseScrollRevealReturn<T extends HTMLElement> {
  ref: RefObject<T>;
  isVisible: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
): UseScrollRevealReturn<T> {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // SSR guard
    if (typeof window === 'undefined') return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add the CSS class for non-framer-motion usage
          element.classList.add('visible');
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
          element.classList.remove('visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
