import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormsControls.module.css'


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', Input, [required])}
      {createField('password', 'password', Input, [required], {type:'password'})}
      {createField(null, 'rememberMe', Input, [], {type:'checkbox'},'remember me' )}

      {captchaUrl && <div><img className={s.captchaImg} src={captchaUrl} /></div>}
      {captchaUrl &&  createField("Symbols from image", "captcha",Input,[required], {})}

      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}  captchaUrl={props.captchaUrl}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
  })
}

export default connect(mapStateToProps, {login})(Login);
