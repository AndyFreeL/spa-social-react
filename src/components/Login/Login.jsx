import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormsControls.module.css'


const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
        </div>
        <div>
          <Field placeholder={'password'} name={'password'} component={Input} validate={[required]}/>
        </div>
        {props.error && <div className={s.formSummaryError}>{props.error}</div>}
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  );
};

const LoginReduxForm= reduxForm({form:'login'})(LoginForm);

const Login = (props) => {

  const onSubmit = (formData)=>{
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth){
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
     <h1>Login</h1>
     <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return({
    isAuth:state.auth.isAuth
  })
}

export default connect(mapStateToProps, {login})(Login);
