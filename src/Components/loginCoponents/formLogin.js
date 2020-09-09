import React, {Component} from 'react';
import '../static/style/loginStyle.css';

class TheForm extends Component {
    render() {
        return(
            <div className='form-login'>
                <h1>Sign In</h1>
                <form className='main-form'>
                    <div className='grp-username'>
                        <label>Username</label>
                        <input type='text' placeholder="username"/>
                    </div>
                    <div className='grp-password'>
                        <label>Password</label>
                        <input type='password' placeholder="password"/>
                    </div>
                    <button className='submit'>Sign In To Codersx</button>
                    <div className='grp-keepsigned'>
                        <label className="forgot">Keep me signed in
                            <span className="checkmark"></span>
                            <input type="checkbox"/>
                        </label>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default TheForm;