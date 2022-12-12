import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getUserLogin} from "../../redux/auth-reduser";
import {maxLengthCreator, required} from "../../utils/validators";
import {Input} from "../common/FormsControl/FormsControl";



const maxLength10=maxLengthCreator(10)
const LoginForm =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" component={Input} name='login'
                        validate={[required,maxLength10]}/>
            </div>
            <div>
                <Field placeholder="Password" component={Input} name='password' type='password'
                       validate={[required,maxLength10]}/>
            </div>
            <div>
                <Field component={'input'} type={"checkbox"} name={'rememberMe'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm=reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit=({login})=>{
        console.log(login);


    }
    return <div>
        <h1>Login</h1>
        <span>{props.report}</span>
        <LoginReduxForm onSubmit={onSubmit}/>

        <a href="https://social-network.samuraijs.com/login" target="_blank">Sign In</a>
    </div>
}
export default (Login);
