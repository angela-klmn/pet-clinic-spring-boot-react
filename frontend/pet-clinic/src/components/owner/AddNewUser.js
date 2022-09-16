import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import myImage from '../../../src/images/cat_1.jpg'

const AddNewUser = ({handelAddNewUser}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    let newUser = {"firstName": "Tina", "lastName": "Turner", "petIds": null, "email": "tina@turner.com" }

    const addNewUser = () => {
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.email = email;
        handelAddNewUser(newUser);
    
    }

  return (
    <div className='flexcontainer'>
        <div>
        <br />
       
    <img src={myImage} width={350} alt="doctor animals"/>
    </div>

    <div>
        
        <br/>
        <h1>Add new User: </h1><br/>

        <form onSubmit={() => addNewUser()} className="form">
        
            <label>First Name: </label><br />
            <input type="text" required value={firstName} onChange={(e) => {setFirstName(e.target.value)}}  /><br />
             
            <label>Last Name: </label><br />
            <input type="text" required value={lastName} onChange={(e) => {setLastName(e.target.value)}}/><br />
           
            <label>E mail: </label><br />
            <input type="email" required value={email} onChange={(e) => {setEmail(e.target.value)}}/><br />
        
            <br />
            
            <input type="submit" value="Add New User" />
        </form>
        </div>
        
    </div>
  )
}

export default AddNewUser;
