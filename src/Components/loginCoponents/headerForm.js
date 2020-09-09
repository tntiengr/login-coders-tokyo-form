import React, {Component} from 'react';
import logo from '../static/imgs/logo.jpg';
import '../static/style/loginStyle.css';

class HeaderLogin extends Component {
    render() {
        return(
            <div className='header-login'>
                <span>
                    <ion-icon className="icon" name={this.props.icon}></ion-icon>
                    <a href='#'className='go-back-btn'>Goback</a>
                </span>
                <img src={logo} className='logo-img' />
                <span>
                    <a href='#' className='sign-up-btn'>Sign up</a>
                </span>
                
            </div>
        );
    }
}

export default HeaderLogin;
