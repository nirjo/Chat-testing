/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect,useState } from 'react'
import Participant from './Participant'
import { useRoom } from '../indexroom'
import tvideoicon from "../../src/assert/tvideoicon.svg"
import taudioicon from "../../src/assert/taudioicon.svg"
import shareicon from "../../src/assert/shareicon.svg"
import tmessage from "../../src/assert/tmessage.svg"
import tendcall from "../../src/assert/tendcall.svg"
import unmuteaudio from "../../src/assert/unmuteaudio.svg"
import unmutevedio from "../../src/assert/unmutevedio.svg"
import "../_main/styles/index.css"
function Room({ token, identity, roomName, onDisconnected }) {
  const {
    room,
    error,
    connectRoom,
    disconnectRoom,
    localParticipant,
    remoteParticipants,
    dominantSpeaker,
    isCameraOn,
    toggleCamera,
    isMicrophoneOn,
    toggleMicrophone
  } = useRoom()
  const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
  useEffect(() => {
    if (!room && token && roomName) {
      connectRoom({ token, options: { name: roomName, dominantSpeaker: true } })
      return () => disconnectRoom()
    }
  }, [connectRoom, disconnectRoom, room, roomName, token])

  const Screenshare = async () => {
    await navigator.mediaDevices.getDisplayMedia({
      video: true
    });
  }
  if (error) return `Error: ${error.message}`

  // connected
  if (room)
    return (
      <div className='twilio-Container'>
       <div className='main-Container'>
        <div className='first-Container'>
          <div className='sectionone'>
          <div className='Main-Container' >
            {remoteParticipants.length === 0 && <div className='Twilio-content'>
              <Participant participant={localParticipant} />
            </div>}
            {remoteParticipants.length > 0 && <div className='remote-Conatiner'>
              <div style={{ margin: "1em" }}>
                <Participant participant={localParticipant} />
              </div>
              <div style={{ margin: "1em" }}>
                {remoteParticipants.map((p, i) => (
                  <Participant participant={p} key={i} />
                ))}
              </div>
            </div>}
          </div>
          
        </div></div>

        {isOpened && (
       <div  className='second-Container'>
          <div className='text'>
          <div className='view-people'> person</div>
          </div>
          <div className='text'>
           {/* <img src={tvideoicon} className='image' /> */}
          <div className='view-people'> person</div>
          </div>
          
          
       </div> 
      )}
       
        
       </div>

        
        {/* <div className='sectionone'>
          <div className='Main-Container' >
            {remoteParticipants.length === 0 && <div className='Twilio-content'>
              <Participant participant={localParticipant} />
            </div>}
            {remoteParticipants.length > 0 && <div className='remote-Conatiner'>
              <div style={{ margin: "1em" }}>
                <Participant participant={localParticipant} />
              </div>
              <div style={{ margin: "1em" }}>
                {remoteParticipants.map((p, i) => (
                  <Participant participant={p} key={i} />
                ))}
              </div>
            </div>}
          </div>
          
        </div> */}

        <div className='bottom-Container'>
          <div className='main-content'>
            <div onClick={() => toggleMicrophone()}>{isMicrophoneOn ? <img src={taudioicon} className='icons' /> : <img src={unmuteaudio} className='icons' />} </div>
            <div onClick={() => toggleCamera()}>{isCameraOn ? <img src={tvideoicon} className='icons' /> : <img src={unmutevedio} className='icons' />}</div>
            <div>  <img src={shareicon} onClick={() => Screenshare()} className='icons' /></div>
            <div onClick={() => {
              disconnectRoom()
              onDisconnected && onDisconnected()
            }}> <img src={tendcall} className='icons' /></div>

          </div>
          <div className='submain-content'>
            <img src={tmessage} onClick={() => toggle() } className='icons' />
          </div>
        </div>







      </div>
    )

  return 'connecting...'
}

export default Room
