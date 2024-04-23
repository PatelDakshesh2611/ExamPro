import axios from "axios";

export const Login=async(email,password)=>{
    try{        
        const formdata={
            email,
            password
        }
        const response = await axios.post('http://localhost:4000/login', formdata);       
        return response.data
    }
    catch(e){
        return {
            message:'Error occured'
        }
    }
}