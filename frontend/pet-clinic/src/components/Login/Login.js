
import image from '../../images/dog_and_cat_2.jpg';
import './login.css';

import { useState, useRef, useEffect } from "react";
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from "react-router-dom"


import axios from '../../api/axios';
const LOGIN_URL = '/api/login';


const Login = () => {
    const { auth, setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("username: " + user)
        console.log("password: " + password)

        try {
            const response = await axios.post(LOGIN_URL,
                new URLSearchParams({ username: user, password: password }),   
                {
                    headers: { 'Content-Type': "application/x-www-form-urlencoded", 'Access-Control-Allow-Credentials':true },
                }
            );

            const accessToken = response?.data?.access_token;
            const refreshToken = response?.data?.refresh_token;
            const roles = response?.data?.role;
            console.log("access token after login: " + accessToken);
            console.log("role: " + roles);
            setAuth({ user: user, password: password, roles: roles, accessToken: accessToken, refreshToken: refreshToken });
            setUser('');
            setPassword('');
            
            if (roles === "ROLE_CLIENT") {
                navigate("/client/pets", { replace: true });
            }
            else (navigate(from, { replace: true }))
      
            
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else if (err.response?.status === 403) {
                setErrMsg('Incorrect username or password');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


    return (
        
        <div className="wrapper">
            <div id="formContent">
            <p ref={errRef} className={errMsg ? "error" : "offscreen"} aria-live="assertive">{errMsg}<br></br></p>
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
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        className="second username"
                        placeholder="username"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        className="third password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <input type="submit" className="fourth customBtn" value="Login" />
                    {/* <input type="submit" className="fourth customBtn" value="Register" /> */}
                    {/* <label style={{ color: 'red' }}>What is this</label> */}

                 
                </form>
                {/*<div id="form-footer">*/}
                {/*    <p>Footer</p>*/}
                {/*</div>*/}
                {/* <!-- Remind Passowrd --> */}
                {/* <div id="formFooter">
          <a className="underlineHover forgot-pswd" href="#">
            Forgot Password?
          </a>
        </div> */}
            </div>
        </div>
            // )
    // }</>
    );
};

export default Login;


