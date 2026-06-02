const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBasePath = (href: string) => {
  if (!href.startsWith('/') || href.startsWith('//')) {
    return href;
  }

  if (basePath && href.startsWith(`${basePath}/`)) {
    return href;
  }

  return `${basePath}/${href.replace(/^\//, '')}`;
};
