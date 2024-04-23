import { Signup } from "../Controllers/Signup";
export const doSignup = (name, email, password) => {
  return async (dispatch) => {
    try {
      const data = await Signup(name, email, password);   
      dispatch({type:'loading'})
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
