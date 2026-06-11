import { useEffect, useRef, useState } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
}

export function Counter({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }: CounterProps) {
    const [count, setCount] = useState(0);
    const { ref, isInView } = useInViewOnce();
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;
        hasAnimated.current = true;

        const startTime = Date.now();
        const endTime = startTime + duration;

        const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = easeOutQuart * end;

            setCount(currentCount);

            if (now < endTime) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(updateCount);
    }, [isInView, end, duration]);

    const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

    return (
        <span ref={ref}>
            {prefix}
            {displayValue}
            {suffix}
        </span>
    );
}
