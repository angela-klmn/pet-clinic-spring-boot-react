import React from 'react'
import AuthContext from "../../context/AuthProvider";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"



const Logout = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const username = auth.name;

    const logoutUser = () => {
        setAuth({})
      }

    useEffect(() => {
        console.log("use effect in logout");
        logoutUser();

      }, [])



  return (
    <div>
      <h2>All done! You logged out successfully!</h2>
      <p>Thank you for using our application!</p>
      <h3>See you later!</h3>

      <br/>
      <br/>
      <Link to={"/login"}><button className='btn btn-outline-secondary'>Back to Login</button></Link>
      <br/>
      <br/>
    </div>
  )
}

export default Logout
