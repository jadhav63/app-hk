import React, { useEffect, useState } from 'react'
import { getData, updateRoom } from './api.js'

export default function Manager({ user, setUser }) {
  const [rows, setRows] = useState([])

  async function load() {
    const data = await getData()
    setRows(data.slice(1))
  }

  useEffect(() => { load() }, [])

  async function markDone(room) {
    const now = new Date().toLocaleString()
    await updateRoom({ room, end: now, status: 'Clean' })
    load()
  }

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <button onClick={()=>setUser(null)}>Logout</button>
      <table border="1">
        <thead><tr><th>Room</th><th>Status</th><th>Staff</th><th>Start</th><th>End</th><th>Action</th></tr></thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i}>
              <td>{r[0]}</td>
              <td>{r[1]}</td>
              <td>{r[2]}</td>
              <td>{r[3]}</td>
              <td>{r[4]}</td>
              <td><button onClick={()=>markDone(r[0])}>Mark Clean</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
