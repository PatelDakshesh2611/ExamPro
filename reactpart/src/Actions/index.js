import { Signup } from "../Controllers/Signup";
import {Login} from '../Controllers/Login'
export const doSignup = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch({type:'loading'})
      const data = await Signup(name, email, password);       
      if (data.message == "done") {
        dispatch({ type: "successfullysignedin", payload: data.data });
      }else if(data.message=='already a user'){
        dispatch({ type:'alreadyauser'});
      }else if(data.message=='Error occured'){
        dispatch({type:'error'})
      }
    } catch (e) {
       dispatch({type:'error'})
    }
  };
};

export const setToInitialize=()=>{
    return {
        type:'settoinitialize'
    }
}

export const doLogin=(email,password)=>{
  return async(dispatch)=>{
    try{
      const res=await Login(email,password);
      dispatch({type:'loading'})
      if(res.message=='Login successful'){
        dispatch({type:'Loginsuccessful',payload:res.user})
      }
    }catch(e){
      dispatch({type:'loginerror'})
    }
  }
}
