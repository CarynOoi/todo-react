import React from 'react';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
    return (
        <div>
            <ul class="list-group">
                {tasks.map((task) => (
                    <li key={task.id} className="list-group-item">
                        <input 
                                className="form-check-input me-1" 
                                type="checkbox" 
                                checked={task.isComplete} 
                                onChange={() => onUpdateTask(task)} 
                                id={`checkbox-${task.id}`} 
                            />
                        
                        <label className="form-check-label" htmlFor={`checkbox-${task.id}`}>
                                {task.name}
                            </label>
                            <button className="btn btn-danger" onClick={() => onDeleteTask(task)}>
                            <i className="bi bi-trash3-fill"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;