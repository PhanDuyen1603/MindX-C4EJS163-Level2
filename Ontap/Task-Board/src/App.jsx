import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Mobile Wireframes",
      description: "Design mobile UI",
      status: "todo"
    },
    {
      id: 2,
      title: "Login Flow",
      description: "Create login page",
      status: "inprogress"
    }
  ])

  return (
    <>
    <TaskCard  title="Test Task" description="This is a test task" status="todo"/>
    {console.log(tasks)}
    </>
  )
}

export default App
