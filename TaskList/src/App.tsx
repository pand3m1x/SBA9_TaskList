import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskDashboard from './Task-Dashboard'

function App() {

  return (
    <div className="App" style={{border:"2px solid red"}}>
      <h1>Stay Organized</h1>
      <TaskDashboard></TaskDashboard>
    </div>
  )
}

export default App
