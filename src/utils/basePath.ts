const normalizeBase = (baseUrl: string): string => {
  if (!baseUrl || baseUrl === '/') return '';
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
};

export const withBase = (path: string): string => {
  const base = normalizeBase(import.meta.env.BASE_URL);
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (!base) return normalizedPath;
  if (normalizedPath === base || normalizedPath.startsWith(`${base}/`)) return normalizedPath;
  return normalizedPath === '/' ? `${base}/` : `${base}${normalizedPath}`;
};

export const baseRootPath = (): string => {
  const base = normalizeBase(import.meta.env.BASE_URL);
  return base || '/';
};

export const normalizePath = (path: string): string => {
  const withoutTrailing = path.replace(/\/+$/, '');
  return withoutTrailing || '/';
};
