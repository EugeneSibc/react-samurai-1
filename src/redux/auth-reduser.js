import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default: return state;
    }
}

export const setAuthUserData = (id,email,login, isAuth) => ({
    type:SET_USER_DATA, data:{id,email,login,isAuth}
});

export const getAuthUserData = () =>(dispatch)=>{  //это thunk creator в который помещена  thunk
    return authAPI.my().then(response =>{
        if(response.data.resultCode === 0){
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login,true));
        }
    })

}
export const login = (email, password,rememberMe) =>(dispatch)=>{
    authAPI.login(email, password,rememberMe).then(response =>{
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages[0];
            dispatch(stopSubmit('login',{_error:message}));

        }
    })
}
export const logout = () =>(dispatch)=>{
    authAPI.logout().then(response =>{
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null,false));
        }
    })
}

export default authReducer;
