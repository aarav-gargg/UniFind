import axios from './axios.js';

export const predictorIpu = async (formData) => {
    try {
        const resp=await axios.post('/api/ipu-predictor',formData);
        return resp;
    } catch (error) {
        console.log(error);
        
    }
}