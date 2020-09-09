import React, { Component } from 'react';
import HeaderLogin from './headerForm';
import TheForm from './formLogin';
import FooterLogin from './footerLogin';

class LoginForm extends Component {
    render() {
        return(
            <div className="login-form">
                <HeaderLogin icon='arrow-back-outline'/>
                <TheForm />
                <FooterLogin />
            </div>
        )
    }
}

export default LoginForm;