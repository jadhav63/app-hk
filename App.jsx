import React, { useState } from 'react'
import Login from './Login.jsx'
import Manager from './Manager.jsx'
import Housekeeping from './Housekeeping.jsx'

export default function App() {
  const [user, setUser] = useState(null)
  if (!user) return <Login setUser={setUser} />
  if (user.role === 'Manager') return <Manager user={user} setUser={setUser} />
  if (user.role === 'Housekeeping') return <Housekeeping user={user} setUser={setUser} />
}
