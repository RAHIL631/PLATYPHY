/**
 * Centralized asset configuration for the PLATYPHY frontend.
 * Provides base-path-aware helpers and shared asset URL constants.
 */

const BASE_PATH = ''; // To be configured based on deployment environment

export const getAssetUrl = (path: string) => `${BASE_PATH}${path}`;

export const ASSETS = {
  IMAGES: {
    HERO_BG: getAssetUrl('/assets/generated/hero-futuristic-dark-bg.dim_1920x1080.png'),
    LOGO: getAssetUrl('/assets/generated/platyphy-logo-final.dim_1536x864.png'),
    FAVICON: getAssetUrl('/assets/generated/platyphy-favicon.dim_512x512.png'),
  }
} as const;
