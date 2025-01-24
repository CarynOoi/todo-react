//to collect info about the to-do item
import React, { useState } from 'react';
import  { createTask } from '../services/api.js';

const TaskForm = ({onTaskAdded}) => {

    const [name, setName] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault(); //preventting page from reloading while submitting form
        const newTask = {name, completed: false};
        const response = await createTask(newTask);
        onTaskAdded(response.data);
        setName('');// clear field after submitting
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={name}
            onChange={ (e) => setName(e.target.value)}
            placeholder="Enter your task"
            />
            <button type="submit">Add Task!</button>
        </form>
    )
};

export default TaskForm;