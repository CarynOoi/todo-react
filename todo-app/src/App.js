import './App.css';
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { getTasks } from './services/api';

  const App = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      const fetchTasks = async () => {
          const response = await getTasks();
          console.log(response.data);
          setTasks(response.data);
      };

      fetchTasks();
  }, []);

    const  handleTaskAdded = (newTask) =>{
      console.log("New Task:", newTask); 
      setTasks([...tasks, newTask]);
    };

    return  (
    <div>
      <h1>To-Do App</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} />
    </div>
  );
};


export default App;
