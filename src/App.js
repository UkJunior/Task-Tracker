import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./component/Tasks";
import React, { useState, useEffect } from "react";
import AddTask from "./component/AddTask";
import Foster from "./component/Foster";
import About from "./component/About";
import CurrentTime from "./component/CurrentTime";

const App = () => {

  const [showAddTask, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    console.log("data :>> ", data);
    return data;
  };

  // fetchTask(id)

  // add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task}
    // setTasks([...tasks, newTask])
  };

  // deleteTask
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "delete",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    console.log(data);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // Toggle Add
  const toggleAdd = (id) => {
    setShowAdd(!id);
  };

  const Use = ({ name }) => {
    return (
    <div>
    {name && <AddTask onAdd={addTask} />}
    {tasks.length > 0 ? (
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      />
    ) : (
      "No Tasks to Show"
    )};
  </div>
    )
  };


  return (
    <Router>
      <div className="container">
      <CurrentTime />
      <Header onToggle={toggleAdd} show={showAddTask} />
      <Routes>
          <Route
            path="/" 
          element={<Use name={showAddTask} />}  
          />
        
          <Route path="/about" element={<About />} />
                  
          </Routes>
          <Foster />
          </div>
          </Router>
  );
};


export default App;
