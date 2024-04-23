// initialstate of the user
const initialState = {
  loading: false,
  data: {},
  loginerror:null,
  loginalert:null,
  error: null,
  alertmessage:null,
  logininitialize:true,
  initialize:true
};
// SignupReducer handles state for the signed in user
const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case'loading':
      return{
        ...state,
        loading:true,
        data:{}        
      }
    case "successfullysignedin":
      return {
        ...state,
        loading: false,
        data: action.payload,
        alertmessage:null,
        initialize:false,
        error:null
      };
    case 'alreadyauser':
      return {
        ...state,
        loading:false,
        alertmessage:'Already a user',
        initialize:false,
        data:{},
        error:null
      }
    case 'error':
      return{
        ...state,
        loading:false,
        error:'error occured',
        alertmessage:null,
        initialize:false,
        data:{}
      }
    case 'settoinitialize':
      return{
        ...state,
        loading:false,  
        logininitialize:true,
        initialize:true
      }
    case 'Loginsuccessful':
      return{
        ...state,
        loading:false,
        initialize:false,
        data:action.payload,
        logininitialize:false,
        loginalert:null,
        loginerror:null
      }
    case 'loginerror':
      return{
        ...state,
        loading:false,
        loginerror:true,
        data:{}
      }
    default:
      return{
        ...state,
        data:{},
        error:null
      }
  }
};

export default signupReducer
