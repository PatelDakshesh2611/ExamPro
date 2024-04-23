import axios from "axios";

// Signup controller handles singup api call
export const Signup=async(name,email,password)=>{
    try{        
        const formdata={
            name,
            email,
            password
        }
        const response = await axios.post('http://localhost:4000/signup', formdata);       
        return response.data
    }
    catch(e){
        return {
            message:'Error occured'
        }
    }
}