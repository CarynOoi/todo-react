import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:5196/api'});

export const getAllTasks = () => api.get('/ToDoItems');


