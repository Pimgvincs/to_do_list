import React, { useState } from 'react'
import TaskForm from './Form'

function List() {
  const [tasks, setTasks] = useState([])
  const addTask = task =>{
      const newTasks = [task, ...tasks]
      setTasks(newTasks);
      console.log(task, ...tasks) /// latest task, and all before tasks
  }

  return (
    <div>
        <h1>Todays plan</h1>
        <TaskForm onSubmit={addTask}/> {/*When submit, function happens*/}
    </div>
  )
}

export default List