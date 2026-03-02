// Centralized SEO configuration
export const SEO = {
  siteName: 'ZapSight',
  siteUrl: 'https://zapsight.co.uk',
  defaultImage: 'https://zapsight.co.uk/og-image.png',
  twitterHandle: '@ZapSight',
} as const;

export const getCanonicalUrl = (path: string) => `${SEO.siteUrl}${path}`;
export const getOgImageUrl = () => SEO.defaultImage;
