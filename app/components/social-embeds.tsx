'use client'

import { useCallback, useEffect, useRef } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: HTMLElement | null) => void
      }
    }
  }
}

export function SocialEmbeds() {
  const timelineRef = useRef<HTMLElement>(null)

  const loadTimeline = useCallback(() => {
    window.twttr?.widgets?.load(timelineRef.current)
  }, [])

  useEffect(() => {
    loadTimeline()
  }, [loadTimeline])

  return (
    <section ref={timelineRef} className="min-w-0">
      <div className="min-h-80 max-w-full overflow-hidden">
        <a
          className="twitter-timeline"
          data-height="520"
          data-chrome="nofooter noborders transparent"
          data-dnt="true"
          data-screen-name="coolstuffwbella"
          data-theme="dark"
          href="https://twitter.com/coolstuffwbella?ref_src=twsrc%5Etfw"
        >
          Posts by @coolstuffwbella
        </a>
      </div>

      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={loadTimeline}
        onReady={loadTimeline}
      />
    </section>
  )
}
