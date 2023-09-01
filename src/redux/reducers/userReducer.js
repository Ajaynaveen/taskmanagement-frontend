const initialState = {
    user: null,
    userProfile: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNIN_SUCCESS":
            return {
                ...state,
                user: action.payload
            };

         case "USER_PROFILE":
            return{
                ...state,
                user:action.payload
            }  
            
          case "USER_LOGOUT":
            return{
                ...state,
                user:null,
                userProfile:null
            }  
            

            default:
                return state
            
        
    }
};
export default userReducer