// import { useState } from 'react'
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
