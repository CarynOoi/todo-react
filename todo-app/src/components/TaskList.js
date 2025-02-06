import React from 'react';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
    return (
        <div>
            <h2>Completed Task</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <button onClick={() => onUpdateTask(task)}>
                            {task.isComplete ? 'Complete' : 'Incomplete'}
                        </button>
                        {task.name} 
                        <button onClick ={() => onDeleteTask(task)}> delete </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;