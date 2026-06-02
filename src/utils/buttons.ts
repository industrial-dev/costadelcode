import type { CtaLink } from '../data/site-content';

export const getButtonVariantClass = (variant: CtaLink['variant']) => {
  if (variant === 'secondary') {
    return 'button-secondary';
  }

  if (variant === 'ghost') {
    return 'button-ghost';
  }

  return 'button-primary';
};
