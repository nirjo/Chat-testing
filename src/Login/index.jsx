import React, { useState } from 'react'
import useConfig from '../hooks/useConfig'
import Lobby from '../Component/Lobby'
import Room from '../Component/Room'
// import { useMyHook } from 'use-twilio-video'


const Login = () => {
  const [joined, setJoined] = useState(false)
  const {
    isLoading: configLoading,
    token,
    identity,
    roomName,
    error: configError,
    getToken
  } = useConfig()

  // Loading
  if (configLoading) return 'get config...'

  // error
  if (configError) return `Error: ${configError.message}`

  // Lobby
  if (!joined) {
    return (
      <div>
        <Lobby
          handleSubmit={data => {
            getToken({ identity: data.username, roomName: data.roomName })
            setJoined(true)
          }}
        />
      </div>
    )
  }

  return (
    <div className='App'>
      <Room
        token={token}
        identity={identity}
        roomName={roomName}
        onDisconnected={() => setJoined(false)}
      />
    </div>
  )
}
export default Login
