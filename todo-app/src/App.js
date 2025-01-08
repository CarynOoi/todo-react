import './App.css';
import React, { useEffect } from 'react';
import { getAllTasks } from './services/api.js';

  const App = () => {
    useEffect(() => {
      const fetchTasks = async () => {
        const response = await getAllTasks();
        console.log(response.data);
      };

      fetchTasks();



    }, [])
    return <div id="root"></div>
  }


export default App;
