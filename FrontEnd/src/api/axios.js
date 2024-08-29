import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://unifind-e66m.onrender.com', // Your API base URL
    // baseURL:"http://localhost:8000",
    withCredentials: true, // Ensure cookies are sent with requests
});
export default instance;