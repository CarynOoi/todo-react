import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:5196/api'});

export const getTasks = () => api.get('/ToDoItems');
export const createTask = (task) => api.post('/ToDoItems', task);


