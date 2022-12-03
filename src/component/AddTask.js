import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')  
  const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
e.preventDefault()

if(!text) {
  alert('please add a task');;
  return
}

console.log('day', day)

onAdd({text, day, reminder})

setText('')
setDay('')
setReminder('false')

}

return (
    <form className="add-form" onSubmit={onSubmit}>
     <div className="form-control">
      <label >Tasks</label>
      <input type="text" placeholder="Add Task" value={text}  onChange={(e) => setText(e.target.value)}/>
     </div>
     <div className="form-control">
      <label>Day & Time</label>
      <input type="text" placeholder="Tue 1:00 pm" required value={day} onChange={(e) => setDay(e.target.value.toUpperCase())} />
    </div>
     <div className="form-control form-control-check">
      <label >Set Reminder</label>
      <input type="checkbox" value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
     </div>

     <input type="submit"  value='Save Task' className="btn btn-block "/>
    </form>
)
}

export default AddTask