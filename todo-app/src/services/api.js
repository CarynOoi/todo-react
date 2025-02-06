import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:5196/api'});

export const getTasks = () => api.get('/ToDoItems');
export const createTask = (task) => api.post('/ToDoItems', task);
export const updateTask = (task) => api.put(`ToDoItems/${task.id}`, task);
export const deleteTask = (id) => api.delete(`ToDoItems/${id}`);