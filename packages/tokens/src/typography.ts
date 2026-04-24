export const fontFamilies = {
  bitcell: ['Bitcell', 'VT323', 'monospace'],
  m5x7: ['m5x7', 'VT323', 'monospace'],
  vt323: ['VT323', 'monospace'],
} as const

export const fontSizes = {
  heroH1: ['42px', { lineHeight: '0.9', letterSpacing: '2px' }],
  heroH1Sm: ['52px', { lineHeight: '0.9', letterSpacing: '2px' }],
  heroH1Md: ['70px', { lineHeight: '0.9', letterSpacing: '2px' }],
  heroH1Xl: ['80px', { lineHeight: '0.9', letterSpacing: '2px' }],
  heroH12xl: ['100px', { lineHeight: '0.9', letterSpacing: '2px' }],

  sectionH2: ['24px', { lineHeight: '0.9', letterSpacing: '2px' }],
  sectionH2Sm: ['34px', { lineHeight: '0.9', letterSpacing: '2px' }],
  sectionH2Md: ['42px', { lineHeight: '0.9', letterSpacing: '3px' }],
  sectionH22xl: ['54px', { lineHeight: '0.9', letterSpacing: '3px' }],

  heroSubtitle: ['22px', { lineHeight: '0.9', letterSpacing: '2px' }],
  heroSubtitleMd: ['32px', { lineHeight: '0.9', letterSpacing: '2px' }],
  heroSubtitle2xl: ['40px', { lineHeight: '0.9', letterSpacing: '2px' }],

  ctaH2: ['32px', { lineHeight: '0.9', letterSpacing: '2px' }],
  ctaH2Md: ['50px', { lineHeight: '0.9', letterSpacing: '2px' }],
  ctaH22xl: ['64px', { lineHeight: '0.9', letterSpacing: '2px' }],

  paragraph: ['17px', { lineHeight: '1.3' }],
  paragraphMd: ['22px', { lineHeight: '1.3' }],
  paragraph2xl: ['28px', { lineHeight: '1.3' }],

  description: ['17px', { lineHeight: '1.35' }],
  descriptionLg: ['21px', { lineHeight: '1.35' }],
  description2xl: ['26px', { lineHeight: '1.35' }],

  featureItem: ['17px', { lineHeight: '1.3' }],
  featureItem2xl: ['25px', { lineHeight: '1.3' }],

  legalBody: ['17px', { lineHeight: '1.5' }],
  legalBodySm: ['19px', { lineHeight: '1.5' }],

  sectionLabel: ['11px', { lineHeight: '1', letterSpacing: '2px' }],
  sectionLabelSm: ['12px', { lineHeight: '1', letterSpacing: '2px' }],
  sectionLabel2xl: ['15px', { lineHeight: '1', letterSpacing: '2.5px' }],

  statLabel: ['10px', { lineHeight: '1', letterSpacing: '1.5px' }],
  statLabelSm: ['11px', { lineHeight: '1', letterSpacing: '2px' }],
  statLabel2xl: ['14px', { lineHeight: '1', letterSpacing: '2px' }],

  statValue: ['34px', { lineHeight: '1', letterSpacing: '2px' }],
  statValueMd: ['42px', { lineHeight: '1', letterSpacing: '2px' }],
  statValue2xl: ['54px', { lineHeight: '1', letterSpacing: '2px' }],

  navLink: ['15px', { lineHeight: '1', letterSpacing: '1.8px' }],
  navLinkXl: ['16px', { lineHeight: '1', letterSpacing: '1.8px' }],
  navLink2xl: ['20px', { lineHeight: '1', letterSpacing: '1.8px' }],

  caption: ['12px', { lineHeight: '1', letterSpacing: '2px' }],
  meta: ['14px', { lineHeight: '1.3' }],
} as const

export type FontSize = keyof typeof fontSizes

export const letterSpacing = {
  sectionLabel: '3px',
  heading: '2px',
  headingWide: '3px',
  nav: '1.8px',
  button: '2px',
  buttonTight: '1.6px',
  caption: '2px',
} as const

export const lineHeight = {
  heading: '0.9',
  body: '1.3',
  bodyLoose: '1.5',
  tight: '1',
} as const
