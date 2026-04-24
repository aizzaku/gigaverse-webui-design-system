export const keyframes = {
  shimmer: {
    '0%': { backgroundPosition: '-200% 0' },
    '100%': { backgroundPosition: '200% 0' },
  },
  progressGlow: {
    '0%, 100%': { boxShadow: '0 0 8px rgba(245,197,99,0.4)' },
    '50%': { boxShadow: '0 0 18px rgba(245,197,99,0.7)' },
  },
  pingpong: {
    '0%': { transform: 'translateX(0)' },
    '33%': { transform: 'translateX(18px)' },
    '50%': { transform: 'translateX(36px)' },
    '66%': { transform: 'translateX(54px)' },
    '83%': { transform: 'translateX(54px)' },
    '90%': { transform: 'translateX(36px)' },
    '95%': { transform: 'translateX(18px)' },
    '100%': { transform: 'translateX(0)' },
  },
  pulse: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.55' },
  },
} as const

export const animations = {
  shimmer: 'shimmer 2.8s ease-in-out infinite',
  progressGlow: 'progressGlow 2s ease-in-out infinite',
  pingpong: 'pingpong 1.2s ease-in-out infinite',
  pulse: 'pulse 1.6s ease-in-out infinite',
} as const
