import './App.css';
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { getTasks, createTask, updateTask, deleteTask } from './services/api';

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

    const handleUpdateTask = async (task) => {
      const updatedTask = { ...task, isComplete: !task.isComplete };
      await updateTask(updatedTask);
      setTasks(tasks.map(t => 
          t.id === task.id ? updatedTask : t
      ));
    };

    const handleDeleteTask = async (task)=>{
      const toBeDeleted = task.id;
      await deleteTask(toBeDeleted);
      setTasks(tasks.filter( t => t.id !== task.id));
    };

    return  (
    <div>
      <div> <h1>To-Do App</h1> </div>
      
      <TaskForm onTaskAdded={handleTaskAdded} />
      <h2>Task List</h2>
      <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask}  />

    </div>
  );
};


export default App;
