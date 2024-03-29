import {getAuthUserData} from "./auth-reduser";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
    };

const appReducer = (state=initialState, action) => {
    switch (action.type){
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default: return state;
    }
}

export const initializedSuccess = () => ({type:INITIALIZED_SUCCESS});

export const initializeApp = () =>(dispatch)=>{
    let promise = dispatch(getAuthUserData());
    promise.then(()=>{dispatch(initializedSuccess())})
    /*setTimeout(()=>{
            dispatch(initializedSuccess())
        }
        ,1000);*/




}


export default appReducer;
