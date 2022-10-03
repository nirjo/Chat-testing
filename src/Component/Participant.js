import React from 'react'
import AudioTrack from './AudioTrack'
import VideoTrack from './VideoTrack'
import { useTrack } from '../indexroom'

function Participant ({ participant }) {
  const { videoOn, audioOn, videoTrack, audioTrack } = useTrack({ participant })

  return (
    <div style={{display:"flex" , justifyContent: "center"}}>
      {videoOn ? <VideoTrack track={videoTrack}  /> : <div style={{ height:"calc(100vh - 22vh)", width: '100%' }}></div>}
      <br />
      {audioOn ? <AudioTrack track={audioTrack} /> : <div></div>}
    </div>
  )
}

export default Participant
