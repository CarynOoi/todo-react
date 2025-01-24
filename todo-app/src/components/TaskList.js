import React, {useState, useEffect} from 'react';
import { getTasks } from '../services/api.js';

// const TaskList = ({tasks}) => {
// const [tasks, setTasks] = useState([]);

// useEffect(() => {
//     const fetchTasks = async () =>{
//         const response = await getTasks();
//         setTasks(response.data);
//     };

//     fetchTasks();
// }, []);

// return (
//     <div>
//         <h2> All Tasks</h2>
//         <ul>
//             {tasks.map(task => (<li key={task.id}>{task.name}</li>))}
//         </ul>
//     </div>
// )
// };

const TaskList = ({ tasks }) => {
    return (
        <div>
            <h2>All Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;