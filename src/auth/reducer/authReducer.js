import { actionTypes } from "./actionTypes";


export const initialState = {
    user: null,
    isAuth: false,
}

export const authReducer = (state, action) => {

    switch (action.type) {
        case actionTypes.LOGIN :
            return{
                ...state,
                 user: action.payload,
                 isAuth: true, 
            };
    
        case actionTypes.LOGOUT :            
            return{
                ...state,
                user: null,
                isAuth: false,
            };
        
        default:
            return state; 
    }

}