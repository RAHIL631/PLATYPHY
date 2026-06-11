import { useState } from 'react';
import { CONNECTIVE_LOGO_URL } from '@/config/assets';

interface LogoProps {
    className?: string;
    alt?: string;
    style?: React.CSSProperties;
    variant?: 'default' | 'inverted';
}

/**
 * Shared PLATYPHY Logo component with graceful fallback handling
 * Renders the logo from centralized, base-aware URL with per-location styling support
 */
export default function Logo({
    className = '',
    alt = 'PLATYPHY',
    style = {},
    variant = 'default'
}: LogoProps) {
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        setHasError(true);
    };

    // If image fails to load, show geometric fallback
    if (hasError) {
        return (
            <div
                className={`flex items-center justify-center font-bold rounded-lg bg-gradient-to-br from-primary to-accent ${className}`}
                style={style}
            >
                <span className="text-white select-none">P</span>
            </div>
        );
    }

    return (
        <img
            src={CONNECTIVE_LOGO_URL}
            alt={alt}
            className={className}
            style={style}
            onError={handleError}
        />
    );
}
