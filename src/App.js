import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
const App = () => {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([

    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Eating Food',
      day: 'Feb 5th at 3:30pm',
      reminder: true,
    },

    {
      id: 1,
      text: 'Eat Food',
      day: 'Feb 5th at 3:00pm',
      reminder: true,
    }
  ])
  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }


  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const togglrReminder = (id) => {

    setTasks(tasks.map((task) => task.id === id
      ? {
        ...task, reminder:
          !task.reminder
      } : task))
  }
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask
      (!showAddTask)} 
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={togglrReminder} /> : 'No Tasks To Show'}
    </div>
  );
}


export default App;
