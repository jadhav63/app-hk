import React, { useEffect, useState } from 'react'
import { getData, updateRoom } from './api.js'

export default function Housekeeping({ user, setUser }) {
  const [rows, setRows] = useState([])

  async function load() {
    const data = await getData()
    const filtered = data.slice(1).filter(r => r[2] === user.username)
    setRows(filtered)
  }

  useEffect(() => { load() }, [])

  async function startRoom(room) {
    const now = new Date().toLocaleString()
    await updateRoom({ room, staff: user.username, start: now, status: 'In Progress' })
    load()
  }

  async function finishRoom(room) {
    const now = new Date().toLocaleString()
    await updateRoom({ room, end: now, status: 'Done' })
    load()
  }

  return (
    <div>
      <h2>Welcome {user.username}</h2>
      <button onClick={()=>setUser(null)}>Logout</button>
      <table border="1">
        <thead><tr><th>Room</th><th>Status</th><th>Start</th><th>End</th><th>Actions</th></tr></thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i}>
              <td>{r[0]}</td>
              <td>{r[1]}</td>
              <td>{r[3]}</td>
              <td>{r[4]}</td>
              <td>
                <button onClick={()=>startRoom(r[0])}>Start</button>
                <button onClick={()=>finishRoom(r[0])}>Done</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
