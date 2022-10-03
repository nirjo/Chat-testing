import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Lobby = ({ handleSubmit }) => {

  const uniqueId = Math.random().toString(36).substr(2, 9);
  const [username, setUsername] = useState('')
  const [roomName, setRoomName] = useState(uniqueId)

  const onSubmit = e => {
    e.preventDefault()
    console.log('username', username)
    console.log('roomName', roomName)
    handleSubmit && handleSubmit({ username, roomName })
  }
  return (
    <div className='form-container'>
      <div className='form-content'>
        <form onSubmit={onSubmit}>
          <div style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
            backgroundColor:"#e0d2d1"
          }}>
            <h2 style={{
              fontSize: "40px",
              margin: "0 0 30px 0",
              height:"10%",
              background:"lightblue",
              textTransform: "uppercase"
              , letterSpacing: "1px"
            }}>Enter a room</h2>
            <div style={{ paddingBottom: "1em" }}>
              <label style={{ display:"flex",marginLeft:"5.5em",marginBottom:"3px", fontWeight: "900" }}>NAME:</label>
              <div><input style={{
                width: "100",
                height: "5px",
                color: "#333333",
                padding: "15px 40px 15px 15px",
                borderRadius: "5px"
              }}
                type='text'
                id='field'
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              /></div>
            </div>
            <div style={{ paddingBottom: "1em" }}>
              <label style={{ display:"flex",marginLeft:"5.5em",marginBottom:"3px", fontWeight: "900" }}>ROOM NAME:</label>
              <div><input style={{
                width: "100",
                height: "5px",
                color: "#333333",
                padding: "15px 40px 15px 15px",
                borderRadius: "5px"
              }}
                type='password'
                id='room'
                disabled={true}
                value={roomName}
                onChange={e => setRoomName(e.target.value)}
                required
              /></div>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}><button style={{ fontWeight: "900", width:"10em", height:"3em", marginBottom:"2em", cursor:"pointer", borderRadius:"5px" }} type='submit'>JOIN</button></div>
          </div>
        </form>
      </div>


    </div>

  )
}

Lobby.propTypes = {
  handleSubmit: PropTypes.func
}

export default Lobby
