import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput'
import './login.css'

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login__title">Форма регистрации</div>
                <FormInput name="Имя"/>
                <FormInput name="Рароль"/>
            </div>
        )
    }
}

export default Login
