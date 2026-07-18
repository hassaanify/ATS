// Helper to handle GitHub Pages subdirectory paths
const basePath = process.env.NODE_ENV === 'production' ? '/ATS' : '';

export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}

export function getBasePath(): string {
  return basePath;
}
