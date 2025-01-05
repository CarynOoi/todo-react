import axios from 'axios';

const api = axios.create({baseUL: 'http://localhost:5196/api'});

axios.get('/TodoItems')
.then (response => {
    console.log(response.data)
});

