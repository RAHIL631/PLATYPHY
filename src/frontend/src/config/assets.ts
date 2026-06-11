/**
 * Centralized asset configuration with base-path-aware URLs
 * Ensures assets work correctly in both development and deployed environments
 */

// Get the base URL for assets, accounting for potential non-root deployment paths
const getAssetUrl = (path: string): string => {
    // Assets are served from the public root /
    return path;
};

// PLATYPHY logo - used across Preloader, Header, Hero, and Footer
export const CONNECTIVE_LOGO_URL = getAssetUrl('/assets/generated/platyphy-logo-new.png');

// Hero section assets
export const HERO_LIGHT_GRADIENT_URL = getAssetUrl('/assets/generated/hero-light-gradient.dim_1920x1080.png');
export const PARTICLE_DOTS_BG_URL = getAssetUrl('/assets/generated/particle-dots-bg.dim_1920x1080.png');
export const HERO_FUTURISTIC_DARK_BG_URL = getAssetUrl('/assets/generated/hero-futuristic-dark-bg.dim_1920x1080.png');
export const HERO_VIDEO_BG_URL = getAssetUrl('/assets/hero-background.mp4');

// Case studies
export const CASE_STUDY_01_URL = getAssetUrl('/assets/generated/case-study-fintech.png');
export const CASE_STUDY_02_URL = getAssetUrl('/assets/generated/case-study-healthcare.png');
export const CASE_STUDY_03_URL = getAssetUrl('/assets/generated/case-study-ecommerce.png');

// Icon sheets
export const INDUSTRIES_ICONS_SHEET_URL = getAssetUrl('/assets/generated/industries-icons-sheet.dim_1024x1024.png');
export const SECURITY_BADGES_SHEET_URL = getAssetUrl('/assets/generated/security-badges-sheet.dim_1024x256.png');
export const TECH_LOGOS_SHEET_URL = getAssetUrl('/assets/generated/tech-logos-sheet.dim_1024x256.png');

// New premium assets
export const WORLD_MAP_OUTLINE_URL = getAssetUrl('/assets/generated/world-map-custom.png');
export const TEAM_PORTRAIT_01_URL = getAssetUrl('/assets/generated/team-portrait-01.dim_800x1000.png');
export const TEAM_PORTRAIT_02_URL = getAssetUrl('/assets/generated/team-portrait-02.dim_800x1000.png');
export const TEAM_PORTRAIT_03_URL = getAssetUrl('/assets/generated/team-portrait-03.dim_800x1000.png');
export const INSIGHT_THUMB_01_URL = getAssetUrl('/assets/generated/insight-thumb-01.dim_1200x800.png');
export const INSIGHT_THUMB_02_URL = getAssetUrl('/assets/generated/insight-thumb-02.dim_1200x800.png');
export const INSIGHT_THUMB_03_URL = getAssetUrl('/assets/generated/insight-thumb-03.dim_1200x800.png');
export const MEGA_MENU_VISUAL_URL = getAssetUrl('/assets/generated/mega-menu-visual.dim_900x600.png');
