import React, { useEffect, useRef } from 'react'

export default function VideoTrack ({ track }) {
  const ref = useRef()

  useEffect(() => {
    if (track) {
      const el = ref.current
      track.attach(el)

      return () => {
        track.detach(el)
      }
    }
  }, [track])

  return <div style={{ height:"calc(100vh - 22vh)", width: '100%' }}><video style={{ height:"calc(100vh - 22vh)", width: '100%' }} ref={ref} /></div>
}
