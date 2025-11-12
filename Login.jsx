import React, { useState } from 'react'
import { login } from './api.js'

export default function Login({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleLogin() {
    const res = await login(username, password)
    if (res.success) setUser({ username, role: res.role })
    else setError('Invalid credentials')
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Hotel Housekeeping Login</h2>
      <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
