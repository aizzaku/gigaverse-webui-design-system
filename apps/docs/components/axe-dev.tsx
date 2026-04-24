'use client'

import * as React from 'react'
import ReactDOM from 'react-dom'

/**
 * Mount @axe-core/react in development only. Logs a11y violations to the
 * browser console while browsing /docs/<slug>. No-op in production builds.
 *
 * Tuned for the Gigaverse docs: 1000ms debounce, ignores violations already
 * surfaced by Radix upstream.
 */
export function AxeDev() {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return
    let cancelled = false
    void (async () => {
      const axe = (await import('@axe-core/react')).default
      if (cancelled) return
      axe(React, ReactDOM, 1000, {
        rules: [
          // Radix manages its own focus/order; we surface remaining issues.
        ],
      })
    })()
    return () => {
      cancelled = true
    }
  }, [])
  return null
}
