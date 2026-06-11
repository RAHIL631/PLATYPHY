import { useCallback } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useRipple() {
    const prefersReducedMotion = usePrefersReducedMotion();

    const createRipple = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            if (prefersReducedMotion) return;

            const button = event.currentTarget;
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;

            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        },
        [prefersReducedMotion]
    );

    return createRipple;
}
