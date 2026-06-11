import { ReactNode } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface RevealProps {
    children: ReactNode;
    delay?: number;
}

export function Reveal({ children, delay = 0 }: RevealProps) {
    const { ref, isInView } = useInViewOnce();
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <div
            ref={ref}
            style={{
                opacity: prefersReducedMotion ? 1 : isInView ? 1 : 0,
                transform: prefersReducedMotion ? 'none' : isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: prefersReducedMotion ? 'none' : `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}
