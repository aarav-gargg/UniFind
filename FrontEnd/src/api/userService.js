import axios from "./axios";


export const loginUser=async(email,password)=>{
    try {
        const response=await axios.post("/auth/login",{email,password})
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const signUpUser=async(data)=>{
    try {
        const response=await axios.post("/auth/signup",data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

