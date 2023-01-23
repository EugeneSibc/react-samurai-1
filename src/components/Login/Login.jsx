import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reduser";
import {maxLengthCreator, required} from "../../utils/validators";
import {Input} from "../common/FormsControl/FormsControl";
import {Navigate} from "react-router";
import styles from '../common/FormsControl/FormsControl.module.css'


const maxLength10=maxLengthCreator(10)
const maxLength20=maxLengthCreator(20)
const LoginForm =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" component={Input} name='email'
                        validate={[required,maxLength20]}/>
            </div>
            <div>
                <Field placeholder="Password" component={Input} name='password' type='password'
                       validate={[required,maxLength10]}/>
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={'rememberMe'}/>remember me
            </div>
            {props.error && <div className={styles.formSummaryErrors}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm=reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit=(value)=>{
        props.login(value.email,value.password,value.rememberMe);
    }
    if(props.isAuth){
        return <Navigate to='/profile'/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
let mapStateToProps =(state)=>({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);
