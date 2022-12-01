import React from "react";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";



const LoginForm =(props)=>{
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={'input'} name={'password'}/>
            </div>
            <div>
                <Field component={'input'} type={"checkbox"} name={'rememberMe'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm=reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit=(formData)=>{
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        <a href="https://social-network.samuraijs.com/login" target="_blank">Sign In</a>
    </div>
}
export default Login;