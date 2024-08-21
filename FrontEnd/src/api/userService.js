import axios from "./axios";


export const loginUser=async(email,password)=>{
    try {
        const response=await axios.post("/auth/login",{email,password})
        return response;
    } catch (error) {
        return error;
    }
};

export const signUpUser=async(data)=>{
    try {
        const response=await axios.post("/auth/signup",data);
        return response;
    } catch (error) {
         return error;
    }
}

export const checkUserStatus=async()=>{
    try {
        const response=await axios.get("/auth/jwt")
        return response.data;
    } catch (error) {
       return error;
    }
}


export const logoutCurrentUser=async()=>{
    try {
        const response=await axios.get('/auth/logout')
        return response
    } catch (error) {
        return error
    }
}

