import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://unifind-e66m.onrender.com', // Your API base URL
    withCredentials: true, // Ensure cookies are sent with requests
});
export default instance;