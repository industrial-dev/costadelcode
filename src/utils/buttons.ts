import type { CtaLink } from '../data/site-content';

const platformButtonClasses = {
  whatsapp: 'button-whatsapp',
  telegram: 'button-telegram',
  instagram: 'button-instagram',
} satisfies Record<NonNullable<CtaLink['platform']>, string>;

export const getButtonVariantClass = (
  variant: CtaLink['variant'],
  platform?: CtaLink['platform']
) => {
  if (platform) {
    return platformButtonClasses[platform];
  }

  if (variant === 'secondary') {
    return 'button-secondary';
  }

  if (variant === 'ghost') {
    return 'button-ghost';
  }

  return 'button-primary';
};
