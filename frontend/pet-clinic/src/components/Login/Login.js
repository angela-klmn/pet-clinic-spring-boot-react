
import image from '../../images/dog_and_cat_2.jpg';
import './login.css';

import {useParams} from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";

import AuthContext from "../../context/AuthProvider"

import axios from 'axios';
const LOGIN_URL = 'http://localhost:8080/api/login';


const Login = ({handleLogin}) => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

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
                new URLSearchParams({ username: user, password: password }),    // <--- itt lehet gond....
                {
                    headers: { 'Content-Type': "application/x-www-form-urlencoded", 'Access-Control-Allow-Credentials':true },
                    //withCredentials: true
                }
            );
            console.log("im in try block")
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.access_token;
            const roles = response?.data?.roles;
            console.log("acc token: " + accessToken)
            setAuth({ user, password, roles, accessToken });
            setUser('');
            setPassword('');
            setSuccess(true);
            console.log("username: " + user)
            console.log("password: " + password)
            console.log(success)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            //errRef.current.focus();
        }
    }



    return (
        <>
         {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
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
            )
    }</>
    );
};

export default Login;


