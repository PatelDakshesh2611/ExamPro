// initialstate of the user
const initialState = {
  loading: false,
  data: {},
  error: null,
  alertmessage:null,
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
        initialize:true
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
