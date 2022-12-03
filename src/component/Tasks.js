import React from 'react'
import Duty from "./Task-duty"


// catch props
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>{tasks.map((duties) => <Duty key={duties.id} task={duties} onDelete={onDelete} onToggle={onToggle} /> 
    )} 
  
    </div>
  )
}

export default Tasks