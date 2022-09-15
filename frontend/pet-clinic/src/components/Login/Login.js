import React from 'react';
import image from '../../images/dog_and_cat_2.jpg';
import './login.css';

const Login = props => {
    return (
        <div className="wrapper">
            <div id="formContent">
                {/* <!-- Tabs Titles --> */}
                <h2 className="title"> Client Management System </h2>

                {/* <!-- Icon --> */}
                <div className="first">
                    <img
                        src={image}
                        id="icon"
                        alt="User Icon"
                        style={{ borderRadius: '50%' }}
                    />
                </div>

                {/* <!-- Login Form --> */}
                <form onSubmit={props.handleLogin}>
                    <input
                        type="text"
                        id="login"
                        className="second username"
                        placeholder="username"
                        onChange={props.handleUsernameChange}
                        value={props.username}
                    />
                    <input
                        type="password"
                        id="password"
                        className="third password"
                        placeholder="password"
                        onChange={props.handlePasswordChange}
                        value={props.password}
                    />
                    <input type="submit" className="fourth customBtn" value="Login" />
                    <input type="submit" className="fourth customBtn" value="Register" />
                    <label style={{ color: 'red' }}>{props.message}</label>
                </form>
                <div id="form-footer">
                    <p>Footer</p>
                </div>
                {/* <!-- Remind Passowrd --> */}
                {/* <div id="formFooter">
          <a className="underlineHover forgot-pswd" href="#">
            Forgot Password?
          </a>
        </div> */}
            </div>
        </div>
    );
};

export default Login;


