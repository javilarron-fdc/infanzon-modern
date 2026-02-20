export type LegacySourceRef = {
  file: string;
  section: string;
};

export type SiteSettings = {
  name: string;
  tagline: string;
  phones: string[];
  ruralHousePhone: string;
  email: string;
  addressLine: string;
  facebookUrl: string;
  mapHint: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  children: NavChild[];
};

export type HeroBlock = {
  kicker: string;
  title: string;
  subtitle: string;
  imageKey: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  stats: Array<{ label: string; value: string }>;
  sources: LegacySourceRef[];
};

export type SectionBlock = {
  title: string;
  body: string[];
  imageKeys?: string[];
  sources: LegacySourceRef[];
};

export type PriceItem = {
  label: string;
  price: string;
  note?: string;
};

export type MenuCourseGroup = {
  title: string;
  items: string[];
  sources: LegacySourceRef[];
};

export type EventPackage = {
  title: string;
  subtitle?: string;
  includes: string[];
  price?: string;
  conditions?: string[];
  sources: LegacySourceRef[];
};

export type PolicyNote = {
  title: string;
  notes: string[];
  sources: LegacySourceRef[];
};

export type GalleryImage = {
  key: string;
  alt: string;
  caption?: string;
  source: LegacySourceRef;
};

export type DownloadAsset = {
  key: string;
  label: string;
  href: string;
};
